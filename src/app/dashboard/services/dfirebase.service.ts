import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, Firestore, limit, orderBy, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { BehaviorSubject, from, Observable, switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { deleteObject, getDownloadURL, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import { uploadBytes } from '@firebase/storage';
import { item } from 'src/app/models/items';

@Injectable({
  providedIn: 'root'
})
export class DFirebaseService {
  constructor(private fireStore: Firestore, private auth: AngularFireAuth, private storage: Storage ) { }

  /***************** items ***************/
  /* add item to firebase */
  addItem(form: NgForm, imgFile: any) {
    let path = `item/${Date.now()}_${imgFile.name}`;
    let $storageRef = ref(this.storage, path);
    let uploadTask = uploadBytesResumable($storageRef, imgFile);
    return uploadTask.then(() => {
      return getDownloadURL(uploadTask.snapshot.ref).then((imgUrl) => {
        let $itemsRef = collection(this.fireStore, "items");
        return addDoc($itemsRef, {
          category: form.value.category,
          description: form.value.description,
          discount: form.value.discount,
          iName: form.value.itemName,
          iPic: imgUrl,
          iPrice: form.value.price,
          rate: 5,
        });
      })
    });
  }

  /* get last 10 added items */
  getLastItems(Limit: number) {
    let $itemsRef = collection(this.fireStore, "items");
    let Q = query($itemsRef, orderBy("iPic", "desc"), limit(Limit));
    return collectionData(Q, { idField: "itemId" }) as Observable<item[]>;
  }

  /* get all items from fireStore */
  getAllItems() {
    let $itemsRef = collection(this.fireStore, "items");
    return collectionData($itemsRef, { idField: "itemId" }) as Observable<item[]>;
  }

  /* update item */
  updateItem(form: NgForm, imgFile: any, selectedItem: any) {
    if (imgFile == null) {
      let $itemsRef = doc(this.fireStore, "items", selectedItem.itemId);
      return setDoc($itemsRef, {
        category: form.value.category,
        description: form.value.description,
        discount: form.value.discount,
        iName: form.value.itemName,
        iPrice: form.value.price,
      }, { merge: true });
    }
    else {
      /* delete old pic */
      let $storageRefD = ref(this.storage, selectedItem.iPic);
      return deleteObject($storageRefD).then(() => {
        console.log("image deleted");
        /* add new pic */
        let path = `item/${Date.now()}_${imgFile.name}`;
        let $storageRef = ref(this.storage, path);
        let uploadTask = uploadBytesResumable($storageRef, imgFile);
        return uploadTask.then(() => {
          return getDownloadURL(uploadTask.snapshot.ref).then((imgUrl) => {
            let $itemsRef = doc(this.fireStore, "items", selectedItem.itemId);
            return setDoc($itemsRef, {
              category: form.value.category,
              description: form.value.description,
              discount: form.value.discount,
              iName: form.value.itemName,
              iPrice: form.value.price,
              iPic: imgUrl,
            }, {merge: true});
          })
        });
      });
    }
  }


  /* Delete item */
  deleteItem(selectedItem:item)
  {
    let $storageRefD = ref(this.storage, selectedItem.iPic);
    return deleteObject($storageRefD).then(()=>{
      let $itemsRef = doc(this.fireStore, "items", selectedItem.itemId);
      return deleteDoc($itemsRef);
    })
  }

}

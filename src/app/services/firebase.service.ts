import { Injectable } from '@angular/core';
import { collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore:Firestore) { }

  //get all items from firestore
  getAllItems()
  {
    let $itemsRef = collection(this.fireStore,"items");
    return collectionData($itemsRef,{idField:"itemId"}) as Observable<item[]>;
  }

  //get items from firestore depending on condition
  getItemsWCondition(condition:string)
  {
    let $itemsRef = collection(this.fireStore,"items");
    let Q = query($itemsRef,where("category","==",condition));
    return collectionData(Q,{idField:"itemId"}) as Observable<item[]>;
  }
}

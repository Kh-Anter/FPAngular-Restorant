import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFirestore, } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.css']
})
export class SavedAddressComponent implements OnInit {
 allAddress:any=[];
// allAddress:any=[{title:"Home",address:"street 26 jule - Assiut"},{title:"work",address:"street elgomhoureya - Assiut"}];
  input_disabled:boolean=true;

  edit(element:any){
    this.input_disabled= !this.input_disabled;
    setTimeout(()=>{
      element.focus()
    })
}

  remove(element:any){
    console.log(element);
    let index=this.allAddress.indexOf("title",element);
    this.allAddress.slice(index,1);
  }

  constructor(private fireStore:AngularFirestore) { }
  getAdress()
  {
    this.fireStore.collection("users").doc("15YrfZOFEWQW3AkdjKhUpuRBunM2").collection("adress").valueChanges()
    .subscribe(val=>{
      this.allAddress.push(val)
    });
    

  }
  ngOnInit(): void {
    this.getAdress();
  }

}

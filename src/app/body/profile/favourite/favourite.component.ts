import { Component, OnInit } from '@angular/core';
import {FavouriteService} from '../../../services/favourite.service';
import { item } from 'src/app/models/items';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private fb:FirebaseService,private FavouriteService:FavouriteService,private fireStore:AngularFirestore) { }
  newproduct:any=[];
  newarr:any=[];
  userData:any; 
  getFavItems()
  {
    this.fireStore.collection("users").doc(this.userData.uId).collection("favorite").valueChanges()
    .subscribe(val=>{
      this.newproduct.push(val)

    });
    this.newarr=this.newproduct.filter((obj:any)=>{
      return (obj.price)
    })

  }

  ngOnInit(): void {

    this.fb.userToken$.subscribe((data)=>{
      this.userData = data;
      console.log(this.userData);
      this.getFavItems();
    })

  }

  deleteproduct(productId: any) {
    this.newproduct.splice(productId-1,1);
    console.log(this.newproduct)
  }

}

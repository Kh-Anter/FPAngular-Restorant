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

  constructor(private database:FirebaseService,private FavouriteService:FavouriteService,private fireStore:AngularFirestore) { }
  newproduct:any=[];
  newarr:any=[];
  getFavItems()
  {
    this.fireStore.collection("users").doc("15YrfZOFEWQW3AkdjKhUpuRBunM2").collection("favorite").valueChanges()
    .subscribe(val=>{
      this.newproduct.push(val)
      console.log(this.newproduct[0]  [0]);

    });
      console.log(this.newproduct[0][0]);
    this.newarr=this.newproduct.filter((obj:any)=>{
      return (obj.price)
    })

  }

  ngOnInit(): void {
    this.getFavItems();

  }

  deleteproduct(productId: any) {
    this.newproduct.splice(productId-1,1);
    console.log(this.newproduct)
  }

}

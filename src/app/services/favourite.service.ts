import { Injectable } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, query, setDoc, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { item } from '../models/items';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor(private fireStore:AngularFirestore ,) { }

  // products=[
  //   {"id":1 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-1.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },
  //   {"id":2 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-2.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },
  //   {"id":3 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-3.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },
  //   {"id":4 , "name":"Checkin supreme" ,"pic":"../../../../assets/images/food-menu-4.png", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis totam aliquam doloremque ipsum, incidunt sapiente, molestias rem aperiam aut ipsam quae nihil expedita laborum corporis? Atque perferendis dolore voluptatem quibusdam" },

  // ]
  products:any=[];
  
  getAllFavItems()
  {
    this.products=this.fireStore.collection('users').doc('').collection('favorite').get();
  }

  addfavorite(pitem:any){
    this.products.push(pitem);
    console.log(this.products);
  }
}

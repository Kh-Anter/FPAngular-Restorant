import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collection, collectionData, doc, Firestore, getDoc, getDocs, limit, orderBy, query, setDoc, where } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { order } from 'src/app/models/orders';
import { Role, user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class DfirebaseOrdersService {

  constructor(private fireStore: Firestore, private auth: AngularFireAuth) { }
  /* get orders */
  getOrders()
  {
    let ordersList = new Subject<order[]>();
    let $ordersList = ordersList.asObservable();
    let newOb:any = "";
    let $itemsRef = collection(this.fireStore, "orders");
    let Q = query($itemsRef, orderBy("date", "desc"), limit(50));
    let result =  collectionData(Q, { idField: "orderId" }) as Observable<order[]>;
     result.subscribe((orders)=>{
      orders.map((order)=>{
        getDoc(doc(this.fireStore,'users',order.uid)).then((user)=>{
          let U = user.data() as user;
          order.clientName = `${U.firstName} ${U.lastName}`;
        }).then(()=>{
          getDoc(doc(this.fireStore,'users',order.did)).then((user)=>{
            let U = user.data() as user;
            order.deliveryName = `${U.firstName} ${U.lastName}`;
            /* console.log(order); */
          })
        })
        ordersList.next(orders);
      })
    })
    return $ordersList;
  }

  /* get all delivery */
  getAllDelivery()
  {
    let $userRef = collection(this.fireStore,"users");
    let Q = query($userRef,where("role","==",2));
    return collectionData(Q,{idField:"uId"}) as Observable<user[]>;
  }

  /* set delivery */
  setDelivery(deliveryId:string,oId:string)
  {
    let $orderRef = doc(this.fireStore, "orders", oId);
    return setDoc($orderRef, {
      did:deliveryId,
      checked:true
    }, {merge: true});
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collection, collectionData, doc, Firestore, query, setDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Role, user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class DfirebaseEmployeeService {

  constructor(private fireStore: Firestore, private auth: AngularFireAuth) { }

  /* search by email */
  searchBEmail(email:string)
  {
    let $userRef = collection(this.fireStore,"users");
    let Q = query($userRef,where("email","==",email));
    return collectionData(Q,{idField:"uId"}) as Observable<user[]>;
  }

  /* change user role */
  changeUserRole(newRole:any,userID:string)
  {
    let $userRef = doc(this.fireStore, "users", userID);
    return setDoc($userRef, {
      role:parseInt(newRole)
    }, {merge: true});
  }

  /* get all employees */
  getAllEmployees()
  {
    let $userRef = collection(this.fireStore,"users");
    let Q = query($userRef,where("role","in",[1,2]));
    return collectionData(Q,{idField:"uId"}) as Observable<user[]>;
  }
}

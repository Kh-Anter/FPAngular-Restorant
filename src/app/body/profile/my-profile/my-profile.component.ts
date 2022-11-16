import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private fireStore:AngularFirestore) { }
  person:any;
  getdetails()
  {
    this.fireStore.collection("users").doc("15YrfZOFEWQW3AkdjKhUpuRBunM2").valueChanges()
    .subscribe(val=>{
      this.person=val;
      console.log(this.person);
      console.log(this.person.firstName);

    });
  }
  ngOnInit(): void {
    this.getdetails();
  }

}

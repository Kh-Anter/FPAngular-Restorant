import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedBtn:number= 1; 
  constructor() {
   }

  ngOnInit(): void {

  }
  onSelectBtn(num:any){
    this.selectedBtn=num;
  }

}

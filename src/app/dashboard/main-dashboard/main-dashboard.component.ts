import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }
  body:any;
  sidebar:any; 
  toggle:any;
  searchBtn:any; 
  modeSwitch:any; 
  modeText:any;
  mood:string="Dark Mood";




ngOnInit(): void {
  this.body = document.querySelector('.mainBody');
  this.sidebar = this.body?.querySelector('nav');
  this.toggle = this.body?.querySelector(".toggle");
  this.searchBtn = this.body?.querySelector(".search-box");
  this.modeSwitch = this.body?.querySelector(".toggle-switch");
  this.modeText = this.body?.querySelector(".mode-text");

  this.toggle?.addEventListener("click",()=>{
    this.sidebar?.classList.toggle("close");
  })

  this.searchBtn?.addEventListener("click", () => {
    this.sidebar?.classList.remove("close");
  })

    this.modeSwitch?.addEventListener("click", () => {
    this.body?.classList.toggle("dark");
    if(this.body?.classList.contains("dark")){
      this.mood = "Light mode";
    }else{
        this.mood = "Dark mode";
    }
  });
  
}
}

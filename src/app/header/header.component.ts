import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
    var brand=document.querySelector(".brand");
    var nav =document.querySelector("nav");
    var nav_btn=document.getElementById("nav-btn");
    var navLink=document.querySelectorAll(".nav-link");
    window.addEventListener("scroll",function(){
      if(this.window.pageYOffset>100){
        brand?.classList.remove("text-white");
        brand?.classList.add("text-dark");
        nav?.classList.add("bg-light")
        nav?.classList.add("activeNav");
        nav?.classList.remove("topNav");
        nav_btn?.classList.add("text-dark");
        navLink.forEach((e)=>{
        e.classList.remove("text-white");
        e.classList.add("text-dark");
       });
      }else{
        brand?.classList.remove("text-dark");
        brand?.classList.add("text-white");
        nav?.classList.remove("bg-light")
        nav?.classList.add("topNav")
        nav?.classList.add("activeNav");
        nav_btn?.classList.remove("text-dark");
        navLink.forEach((e)=>{
          e.classList.remove("text-dark");
          e.classList.add("text-white");
         });
      }
    });

  }
}

import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cartProducts:any[]=[];
subTotal:any=0
visable:boolean=true;
  constructor() { }

  ngOnInit(): void {
    this.getCartProduct()
   
  }
getCartProduct(){
  if ("cart" in sessionStorage){
    this.cartProducts=JSON.parse(sessionStorage.getItem("cart")!)
  }
  console.log(this.cartProducts)
  
   this.getCartTotal();
}

getCartTotal(){
  this.subTotal=0
  for (let x in this.cartProducts){
    this.subTotal +=this.cartProducts[x].price * this.cartProducts[x].quantity
    
  }
}
 

  hide(location: any,details:any,payment:any ,progressBar1:any,progressBar2:any) {
   if(!details.classList.contains('d-none')){
    payment.classList.remove('d-none');
    details.classList.add('d-none');
    location.classList.add('d-none');
    progressBar2.classList.add('w-100');
    
   this.visable=false

   }else{

     
     console.log("2222")
     details.classList.remove('d-none');
     location.classList.remove('d-block');
     location.classList.add('d-none');
     progressBar1.classList.add('w-100')
     progressBar2.classList.add('w-50')
    //  next.classlist.add('d-none');
    

    }
    



  }
 
}

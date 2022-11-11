import { Component, OnInit } from '@angular/core';
// import { CartsService } from '../carts.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  product: any;
  constructor(
    //  private service:CartsService
     ) { }
 cartProducts:any[]=[];
 subTotal:number=0;
 
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

addAmount(index:number){
  this.cartProducts[index].quantity++;
   this.getCartTotal();
  sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
}

minsAmount(index:number){
  this.cartProducts[index].quantity--;
   this.getCartTotal();
  sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
}

detectChange(){
     this.getCartTotal();
  sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
}

deleteProduct(index:number){
  this.cartProducts.splice(index,1)
     this.getCartTotal();
  sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))

}

clearCart(){
  this.cartProducts=[],
     this.getCartTotal();
  sessionStorage.setItem("cart",JSON.stringify(this.cartProducts))
}

getCartTotal(){
  this.subTotal=0
  for (let x in this.cartProducts){
    this.subTotal +=this.cartProducts[x].iprice * this.cartProducts[x].quantity
    
  }
}


// addCart() {
//   let order = this.cartProducts.map(item => {
//    return {productId:this.cartProducts}
//   })

//    let Model = {
//      products:order
//    }
//   this.service.createNewCart(Model).subscribe(res => {
//       })
//   console.log("Model")
//   }
   

    
   
  
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { item } from 'src/app/models/items';
import { FirebaseService } from 'src/app/services/firebase.service';
declare var bootstrap: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private database:FirebaseService) { }

  /* @ViewChild('myModel') myModel: any; */
  items:item[] = [];
  activeState:number = 0;
  foodItem:any = "";
/************************************* Sub-Functions **************************************/
  //calculate price after discount
  calaPriceADiscount(price:number,discount:number){
    return price - (price * (discount/100));
  }

  //change active state
  changeAState(newState:number)
  {
    this.activeState = newState;
  }

  /************************************* Sub-Functions **************************************/
  /************************************* Main-Functions **************************************/
  //get all  items from database
  getAllItemsFDatabase()
  {
    this.database.getAllItems().subscribe((data)=>{
      this.items = data;
    },
    (error)=>{
      console.log("from shop/getAllItems"+error);
    });
  }

  //get items depending on category
  getItemDCategory(category:string)
  {
    this.database.getItemsWCondition(category).subscribe((data)=>{
      this.items = data;
    },(error)=>{
      console.log("from shop/getItemDCategory"+error)
    })
  }

  //show bootstrap modal
  showBootstrapModal(foodItem:any)
  {
    const element = document.getElementById('exampleModal') as HTMLElement;
    const myModal = new bootstrap.Modal(element);
    this.foodItem = foodItem;
    myModal.show();
  }
  
  ngOnInit(): void {
    //get all items from database
    this.getAllItemsFDatabase();
  }

}

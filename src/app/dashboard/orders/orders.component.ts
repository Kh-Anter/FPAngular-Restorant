import { Component, OnInit } from '@angular/core';
import { DfirebaseOrdersService } from '../services/dfirebase-orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private dfbOrders:DfirebaseOrdersService) { }
  orders:any[] = [];
  allDelivery:any [] = [];

  /* set delivery */
  setDelivery(deliveryId:string,oId:string)
  {
    this.dfbOrders.setDelivery(deliveryId,oId).then(()=>{
      console.log("delivery set");
    }).catch((err)=>{
      console.log(err+"from orders dashboard");
    })
  }

  ngOnInit(): void {
    /* get orders */
    this.dfbOrders.getOrders().subscribe((data)=>{
      this.orders = data;
    });

    /* get all delivery */
    this.dfbOrders.getAllDelivery().subscribe((data)=>{
      this.allDelivery = data;
    })
  }

}

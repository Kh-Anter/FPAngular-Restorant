import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { item } from 'src/app/models/items';
import { DFirebaseService } from '../services/dfirebase.service';
import { ToastrService } from 'ngx-toastr';
declare var bootstrap: any;

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private dfirebase: DFirebaseService,private toastr: ToastrService) {}
  @ViewChild('form') public MForm!: NgForm;
  imgFile: any = null;
  selectedItem:any = null;
  allItems: item[] = [];
  last10items: item[] = [];
  filteredItems: item[] = [];
  clicked:boolean = false;
  element:any;
  myModal:any;

  /* get image file */
  getImgFile(event: any) {
    this.imgFile = event.target.files[0];
    console.log("first check");
  }

  /* add new item */
  onSubmit(form: NgForm) {
    this.dfirebase.addItem(form, this.imgFile).then(() => {
      console.log("item added");
      this.toastr.success('Item Added','',{timeOut: 1100,closeButton: true,progressBar: true,});
      form.reset();
      this.imgFile = null;
    }).catch((err) => {
      console.log(err);
    })
  }

  /* Search */
  search(searchField: string) {
    if (searchField) {
      this.filteredItems = this.allItems.filter(item => item.iName.toLowerCase().includes(searchField.toLowerCase()));
    }
    else {
      this.filteredItems = this.last10items;
    }
    console.log(this.filteredItems);
  }

  /* show item info in form when clicked */
  showItemInfo(item: item, form: NgForm) {
    form.setValue({
      itemName : item.iName,
      category : item.category,
      description : item.description,
      price : item.iPrice,
      discount : item.discount,
      picture : "",
    });
    this.clicked = true;
    this.selectedItem = item;
  }

  /* detect resetting the form */
  formReset()
  {
    this.MForm.reset();
    this.clicked = false;
    this.imgFile = null;
    this.selectedItem = null;
  }

  /* update item */
  updateItem(form:NgForm)
  {
    this.dfirebase.updateItem(form, this.imgFile ,this.selectedItem).then(()=>{
      this.toastr.success('Edit Done','',{timeOut: 1100,closeButton: true,progressBar: true,});
      console.log("file updated successfully");
      this.formReset();
    })
  }

  /* Delete item */
  deleteItem()
  {
    this.dfirebase.deleteItem(this.selectedItem).then(()=>{
      /* close confirm modal */
      this.myModal.hide();
      this.formReset();
      this.toastr.success('Item Deleted','',{timeOut: 1100,closeButton: true,progressBar: true,});
      console.log("item deleted");
    }).catch((err)=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
    /* get all items from fireStore */
    this.dfirebase.getAllItems().subscribe((data) => {
      this.allItems = data;
      /* get last added items with limit */
      this.last10items = data;
      this.last10items = this.last10items.sort((a, b) => (a.iPic > b.iPic ? -1 : 1)).slice(0, 10);
      this.filteredItems = this.last10items;
    }, (error) => {
      console.log("Error from getAllItems in dashboard" + error);
    })

    /* declare confirm dialog */
    this.element = document.getElementById('exampleModal') as HTMLElement;
    this.myModal = new bootstrap.Modal(this.element);
  }

}

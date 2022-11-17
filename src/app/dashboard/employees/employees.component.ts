import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Role, user } from 'src/app/models/user';
import { DfirebaseEmployeeService } from '../services/dfirebase-employee.service';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private dfbEmployeeService:DfirebaseEmployeeService,private _clipboardService: ClipboardService) {}
  userWsearch:user [] = [];
  userRole:any = Role;
  @ViewChild('addESearchField') addESearchField!: ElementRef;
  allEmployees:user [] = [];
  $allEmployees:user [] = [];

  /* search by email */
  searchBEmail(email:string)
  {
    this.dfbEmployeeService.searchBEmail(email).subscribe((data)=>{
      this.userWsearch = data;
      console.log(data[0].addresses);
      console.log(this.userWsearch);
    },(err)=>{
      console.log(err+"error from search by email in dashboard");
    })
  }

  /* change user’s role */
  changeRole(newRole:any)
  {
    this.dfbEmployeeService.changeUserRole(newRole,this.userWsearch[0].uId).then(()=>{
      console.log(`${this.userWsearch[0].email} is ${newRole} NOW!`);
    }).catch((err)=>{
      console.log(err)
    })
  }

  /* clear add employee search */
  clearaddE()
  {
    this.addESearchField.nativeElement.value = '';
    this.userWsearch = [];
  }

  copyText(employeeEmail:string)
  {
    this._clipboardService.copy(employeeEmail);
  }

  /* search */
  search(searchField:string)
  {
    if(searchField)
    {
      this.allEmployees = this.allEmployees.filter(employee => employee.firstName.toLowerCase().includes(searchField.toLowerCase()) || 
      employee.lastName.toLowerCase().includes(searchField.toLowerCase()) );
    }
    else
    {
      this.allEmployees = this.$allEmployees;
    }
  }

  /* ****************************** all employees*************************** */

  ngOnInit(): void {
    /* get all employees */
    this.dfbEmployeeService.getAllEmployees().subscribe((data)=>{
      this.allEmployees = data;
      this.$allEmployees = data;
    })
  }

}

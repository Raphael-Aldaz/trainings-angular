import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  customer : Customer;
constructor(private cartService: CartService, private router : Router){
  this.customer = new Customer("","","","","")
}
onSaveCustomer(customer: Customer, myForm: NgForm){
  myForm.reset();
  localStorage.removeItem("trainings");
  this.cartService.saveCustomer(customer);
}
getCustomer():Customer{
  return this.customer
}
}

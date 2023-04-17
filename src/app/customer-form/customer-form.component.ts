import { Component } from '@angular/core';
import { Customer } from '../model/Customer';
import { NgForm } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

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
  this.cartService.saveCustomer(customer);
}
getCustomer():Customer{
  return this.customer
}
}

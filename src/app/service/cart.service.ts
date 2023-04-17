import { Injectable, OnInit } from '@angular/core';
import { Training } from '../model/training';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
  trainingCart : Training[] = [];
  trainingsSaved : Training[] = [];
  customer! : Customer;

  constructor() {
    this.getCart();
  }
  saveCustomer(customer: Customer): void {
    this.customer = customer;
  }

  saveCart(trainingList : Training[]){
    localStorage.setItem('trainings', JSON.stringify(trainingList));
  }
  getCart() :Training[]{
    const storedValue = localStorage.getItem('trainings')
    return storedValue ? JSON.parse(storedValue) : []
  }

}

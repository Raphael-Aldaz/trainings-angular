import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  trainingsSelected : Training[] = []
  total = 0;
  displayForm : boolean = false;
  constructor(private cartService : CartService){
    this.trainingsSelected = this.cartService.getCart();
  }
ngOnInit(): void {
  this.totalPrice(this.trainingsSelected)
}
totalPrice(training :Training[]){
  for(let i of training)
  this.total += (i.price * i.quantity)
}

showForm(){
  this.displayForm =!this.displayForm;
}

deleteTraining(training : Training){
  this.trainingsSelected = this.trainingsSelected.filter((item) => item !== training)
  this.cartService.saveCart(this.trainingsSelected)
  this.total -= training.price;
}

}


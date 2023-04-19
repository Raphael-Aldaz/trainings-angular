import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { CartService } from 'src/app/service/cart.service';
import {trainings} from '../../data/data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  allTrainings : Training [] = []

  constructor( private cartService : CartService, private router : Router){}

  ngOnInit(): void {
    this.allTrainings = trainings;
  }
  addTraining(training : Training){
    this.cartService.trainingCart.push(training)
    this.cartService.saveCart(this.cartService.trainingCart);

    console.log(training,'component')
  }
}

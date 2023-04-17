import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './components/training/training.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path : 'trainings',component : TrainingComponent},
  {path : 'cart',component : CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutes} from './user-routing-module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }

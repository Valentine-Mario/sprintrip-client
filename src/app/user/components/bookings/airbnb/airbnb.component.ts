import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.css']
})
export class AirbnbComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  search(){
    this.router.navigate(['/user/booking/airbnb-list'])
  }

}

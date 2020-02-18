import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute) { }
cars:any;
  ngOnInit() {
    this.cars=this.ActiveRoute.snapshot.data['car']
  }

}

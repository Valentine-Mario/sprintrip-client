import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }
searchForm:FormGroup;
  ngOnInit() {
    this.searchForm=this.fb.group({
      
    })
  }

  search(){
    this.router.navigate(['/user/booking/flight-list'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
searchForm:FormGroup;
  ngOnInit() {
    this.searchForm=this.fb.group({
      
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cruise',
  templateUrl: './cruise.component.html',
  styleUrls: ['./cruise.component.css']
})
export class CruiseComponent implements OnInit {
  adult:number=0
  children:number=0
  constructor() { }

  ngOnInit() {
  }

  editChildrenCount(a){
    if(this.children<1 && parseInt(a)<0){
      //do nothing
    }else{
      this.children+=parseInt(a)
    }
  }

  editAdultCount(a){
    if(this.adult<1 && parseInt(a)<0){
      //do nothing
    }else{
      this.adult+=parseInt(a)
    }
  }
}

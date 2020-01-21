import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor() { }
room:number=0
adult:number=0
children:number=0
  ngOnInit() {

  }


  editRoomCount(a){
    if(this.room<1 && parseInt(a)<0){
      //do nothing
    }else{
      this.room+=parseInt(a)
    }
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

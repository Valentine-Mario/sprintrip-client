import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private router:Router) { }
room:number=0
adult:number=0
children:number=0
  ngOnInit() {

  }
  search(){
    this.router.navigate(['/user/booking/hotel-list'])
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

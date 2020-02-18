import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  search(){
    this.router.navigate(['/user/booking/venue-list'])
  }

}

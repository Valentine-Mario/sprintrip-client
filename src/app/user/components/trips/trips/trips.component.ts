import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute) { }
user:any;
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
  }

}

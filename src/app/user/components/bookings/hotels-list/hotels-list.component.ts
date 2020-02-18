import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute) { }
hotels:any
  ngOnInit() {
    this.hotels= this.ActiveRoute.snapshot.data['hotel'];

  }

}

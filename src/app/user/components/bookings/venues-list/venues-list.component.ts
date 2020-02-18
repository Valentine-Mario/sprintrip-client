import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.css']
})
export class VenuesListComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute) { }
venue:any;
  ngOnInit() {
    this.venue= this.ActiveRoute.snapshot.data['venue'];

  }

}

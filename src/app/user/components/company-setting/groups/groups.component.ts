import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute) { }
groups:any;
p:number;
p2:number
  ngOnInit() {
    this.groups= this.ActiveRoute.snapshot.data['group']
  }
  paginate(a){

  }

}

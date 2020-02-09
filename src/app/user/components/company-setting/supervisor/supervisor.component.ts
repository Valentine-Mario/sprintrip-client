import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute) { }
invited_users:any
p:number
  ngOnInit() {
    this.invited_users= this.ActiveRoute.snapshot.data['invited_user']
  }

}

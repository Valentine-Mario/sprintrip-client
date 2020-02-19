import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {BookingService} from '../../../services/booking.service'
import {HelpersService} from '../../../services/helpers.service'

@Component({
  selector: 'app-cruise-detail',
  templateUrl: './cruise-detail.component.html',
  styleUrls: ['./cruise-detail.component.css']
})
export class CruiseDetailComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private bookingService:BookingService,
    private modalService: NgbModal, private fb:FormBuilder, private Helpers:HelpersService) { }
    closeResult:string;
    booking_form:FormGroup;
    groups:any;
    spin:Boolean=false;
    user:any;
    show_group:Boolean;
    nameDevice:any;
    hide_group:Boolean=true;
  ngOnInit() {
    this.groups= this.ActiveRoute.snapshot.data['group'];
    this.user= this.ActiveRoute.snapshot.data['user'];
    if(!localStorage.getItem('user-token')){
      this.hide_group=false
    }
    if(localStorage.getItem('user-token')){
      if(this.user.status==205){
        this.Helpers.logoutAndRedirect()
        this.Helpers.infoToast('Token expired', '')
      }
      if(this.user.body.message.account_type !== 'Business'){
        this.show_group=false
      }
    }

    this.booking_form=this.fb.group({
      start_date:['', Validators.required],
      end_date:['', Validators.required],
      group:['']
    })
  }

  addBooking(){
    this.Helpers.successToast('', 'booking successful')
    this.modalService.dismissAll()
    this.spin=false;
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

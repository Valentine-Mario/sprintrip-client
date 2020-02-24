import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {BookingService} from '../../../services/booking.service'
import {HelpersService} from '../../../services/helpers.service'

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

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
    cars:any;
  ngOnInit() {
    this.cars=this.ActiveRoute.snapshot.data['car']
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
      quantity:['', [Validators.required]],
      start_date:['', Validators.required],
      end_date:['', Validators.required],
      group:['']
    })
  }

  addBooking(){
    var formData=this.booking_form.value;
    if(formData.group==""){
      formData.group=null
    }
    this.spin=true;
    if(localStorage.getItem('invite-token')){
      this.bookingService.addCarBookingInvitedUser(this.cars.body.message._id, formData).subscribe(response=>{
        this.spin=false;
        if(response.status==200){
          this.Helpers.successToast('', 'booking made successfully');
          this.modalService.dismissAll();
        }else{
          this.Helpers.errorToast('', 'error making booking')
        }
      })
    }
    else if(localStorage.getItem('user-token')){
      this.bookingService.addCarBookingUser(this.cars.body.message._id, formData).subscribe(response=>{
        this.spin=false;
        if(response.status==200){
          this.Helpers.successToast('', 'booking made successfully');
          this.modalService.dismissAll();
        }else{
          this.Helpers.errorToast('', 'error making booking')
        }
      })
    }else{
      this.bookingService.addCarBookingNonUser(this.cars.body.message._id, formData).subscribe(response=>{
        this.spin=false;
        if(response.status==200){
          this.Helpers.successToast('', 'booking made successfully');
          this.modalService.dismissAll();
        }else{
          this.Helpers.errorToast('', 'error making booking')
        }
      })
    }
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

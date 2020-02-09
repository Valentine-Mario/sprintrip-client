import { Component, OnInit } from '@angular/core';
import {HelpersService} from '../../../services/helpers.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {PaymentService} from '../../../services/payment.service'
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor( private ActiveRoute:ActivatedRoute, private modalService: NgbModal, 
    private Helpers:HelpersService, private fb:FormBuilder, private payment:PaymentService) { }
user:any;
cards:any;
p:number;
closeResult:string;
card_form:FormGroup
spin:Boolean
card_id:string
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    this.cards=this.ActiveRoute.snapshot.data['card']
    this.card_form=this.fb.group({
      card_no:['', [Validators.required, Validators.minLength(16)]]
    })
  }

  addCard(){
    var formData=this.card_form.value;
    this.spin=true;
    this.payment.addCard(formData).subscribe(response=>{
      if(response.status==200){
        this.Helpers.successToast('', 'card added successfully')
        this.payment.getCards().subscribe(value=>{
          this.spin=false
          this.cards=value
          this.modalService.dismissAll()
          this.card_form=this.fb.group({
            card_no:['', [Validators.required, Validators.minLength(16)]]
          })
        })
      }else{
        this.spin=false
        this.Helpers.errorToast('', 'errro addding card')
      }
    })
  }

  selectCard(a){
    this.card_id=a._id
  }
  deleteCard(){
    this.spin=true;
    this.payment.deleteCards(this.card_id).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.Helpers.infoToast('', 'card deleted successfully')
        this.cards.body.message.splice(this.cards.body.message.findIndex(i => i._id === this.card_id), 1)
        this.modalService.dismissAll()
      }else{
        this.Helpers.errorToast('', 'error deleting card')
      }
    })
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

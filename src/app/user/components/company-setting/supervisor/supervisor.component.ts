import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {InviteService} from '../../../services/invite.service'

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private Helpers:HelpersService, private fb:FormBuilder,
    private invitedUserService:InviteService, private modalService: NgbModal) { }
invited_users:any
p:number;
seletedGroup:object;
inviteForm:FormGroup;
spin:Boolean=false;
closeResult:string;
modifyAcessForm:FormGroup;
  ngOnInit() {
    this.invited_users= this.ActiveRoute.snapshot.data['invited_user'];
    this.inviteForm=this.fb.group({
      email:['', [Validators.required, Validators.email]]
    })
    this.modifyAcessForm=this.fb.group({
        limit:['', Validators.required],
        limit_amount:['']
    })
  }
  select(a){
    this.seletedGroup=a;
  }
  deleteInvitedUser(){
    this.spin=true;
    this.invitedUserService.deleteInvitedUser(this.seletedGroup['_id']).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Helpers.infoToast('', 'user deleted successfully')
        this.modalService.dismissAll();
        this.invited_users.body.message.splice(this.invited_users.body.message.findIndex(i => i._id === this.seletedGroup['_id']), 1)

      }else{
        this.Helpers.errorToast('', 'error deleting user account')
      }
    })
  }
  ModifyUserAcess(){
    this.spin=true;
    var formData=this.modifyAcessForm.value;
    this.invitedUserService.editInvitedUserAccess(formData, this.seletedGroup['_id']).subscribe(response=>{
      this.spin=false
      if(formData.limit=='Sometimes' && formData.limit_amount==''){
        this.Helpers.infoToast('', '  Please specify amount limit')
      }else{
        if(response.status==200){
          this.Helpers.successToast('', `${this.seletedGroup['name']} access successfully modified`)
          this.modalService.dismissAll();
          this.modifyAcessForm=this.fb.group({
            limit:['', Validators.required],
            limit_amount:['']
        })
        }else{
          this.Helpers.errorToast('', 'error modifying access')
        }
      }
    })
  }
  sendInvite(){
    var formData=this.inviteForm.value;
    this.spin=true;
    this.invitedUserService.sendInvite(formData).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Helpers.successToast('', 'invite successfully sent')
        this.modalService.dismissAll()
        this.inviteForm=this.fb.group({
          email:['', [Validators.required, Validators.email]]
        })
      }else{
        this.Helpers.infoToast('Invite not sent', response.body['message'])
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

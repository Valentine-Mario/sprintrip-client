import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {InviteService} from '../../../services/invite.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private modalService: NgbModal, private userService:UserService,
    private Helpers:HelpersService, private fb:FormBuilder, private inviteService:InviteService) { }
  user:any
  invitedUser:any
  showInviteUser:Boolean=false
  closeResult:string
  EditMainForm:FormGroup;
  EditSupervisorAccount:FormGroup;
  EditMainPassword:FormGroup;
  EditSupervisorPassword:FormGroup;
  ChangeAccountType:FormGroup;
  spin:Boolean=false
  selectedPics:any
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    if(localStorage.getItem('invite-token')){
      this.invitedUser=this.ActiveRoute.snapshot.data['invite']
      this.showInviteUser=true;
      this.EditSupervisorAccount=this.fb.group({
        name:[this.invitedUser.body.message.name, Validators.required]
      })
      this.EditSupervisorPassword=this.fb.group({
        old_password:['', [Validators.required]],
        password:['', [Validators.minLength(6), Validators.required]]
      })
    }
    this.EditMainForm=this.fb.group({
        name:[this.user.body.message.name, [Validators.required]],
        email:[this.user.body.message.email, [Validators.required, Validators.email]]
    })
    this.EditMainPassword=this.fb.group({
        old_password:['', [Validators.required]],
        password:['', [Validators.minLength(6), Validators.required]]
    })
    this.ChangeAccountType=this.fb.group({
      account_type:['', Validators.required]
    })
  }

  editSupervisoracc(){
    var formData=this.EditSupervisorAccount.value
    this.spin=true
    this.inviteService.InvitedUserEdit(formData).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.modalService.dismissAll()
        this.Helpers.successToast('', 'name updated successfully')
        this.invitedUser.body.message.name=formData.name
      }else{
        this.Helpers.errorToast('Error uodating', '')
      }
    })
  }

  editSupervisorpass(){
    var formData=this.EditSupervisorPassword.value
    this.spin=true
    this.inviteService.InvitedUserEditPassword(formData).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.modalService.dismissAll()
        this.Helpers.successToast('', 'password updated successfully')
      }else{
        this.Helpers.errorToast('', response.body['message'])
      }
    })
  }

  editMainAccount(){
    if(localStorage.getItem('invite-token')){
      this.Helpers.infoToast('', 'unauthorized to access this option')
    }else{
      var formData=this.EditMainForm.value
      this.spin=true;
      this.userService.editUser(formData).subscribe(response=>{
        this.spin=false
        if(response.status==200){
          this.modalService.dismissAll()
          this.Helpers.successToast('', 'updates made successfully')
          this.user.body.message.name=formData.name;
          this.user.body.message.email=formData.email;
        }else{
          this.Helpers.errorToast('', response.body['message'])
        }
      })
    }
  }

  editMainpass(){
    if(localStorage.getItem('invite-token')){
      this.Helpers.infoToast('', 'unauthorized to access this option')
    }else{
    var formData=this.EditMainPassword.value
    this.spin=true;
    this.userService.changePassword(formData).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.modalService.dismissAll();
        this.Helpers.successToast('', 'updates made successfully')
      }else{
        this.Helpers.errorToast('', response.body['message'])
      }
    })
    }
  }

  changeAcc(){
    if(localStorage.getItem('invite-token')){
      this.Helpers.infoToast('', 'unauthorized to access this option')
    }else{
    var formData=this.ChangeAccountType.value
    this.spin=true;
    this.userService.changeAccountType(formData).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.modalService.dismissAll()
        this.Helpers.successToast('', 'Account type modified successfully')
      }else{
        this.Helpers.errorToast('', response.body['message'])
      }
    })
  }
  }

  setImage(event){
    this.selectedPics=event.target.files[0]
}
spin_pics:Boolean=false
uploadImg(){
  if(localStorage.getItem('invite-token')){
    this.Helpers.infoToast('', 'unauthorized to access this option')
  }else{
  var fd= new FormData;
  this.spin_pics=true;
    fd.append("pics", this.selectedPics, this.selectedPics.name)
    this.userService.updatePics(fd).subscribe(response=>{
      this.spin_pics=false
      if(response.status==200){
        this.modalService.dismissAll()
        this.Helpers.successToast('', 'Image updated successfully')
        this.user.body.message.pics=response.body['pics']
      }else{
        this.Helpers.errorToast('', response.body['message'])
      }
    })
  }
}
spin_request:Boolean=false
requestBooking(){
  this.spin_request=true
  if(localStorage.getItem('invite-token')){
    this.userService.requestBookingByInvitedUser().subscribe(response=>{
      this.spin_request=false
      if(response.status==200){
        this.modalService.dismissAll();
        this.Helpers.successToast('', 'booking details has been sent to your email')
      }
    })
  }else{
    this.userService.requestBooking().subscribe(response=>{
      this.spin_request=false
      if(response.status==200){
        this.modalService.dismissAll();
        this.Helpers.successToast('', 'booking details has been sent to your email')
      }
    })
  }
}


deleteAcc(){
  if(localStorage.getItem('invite-token')){
    this.Helpers.infoToast('', 'unauthorized to access this option')
  }else{
    this.spin=true
    this.userService.deleteAccount().subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.modalService.dismissAll();
        this.Helpers.infoToast('', 'Account deleted successfully')
        this.Helpers.logoutAndRedirect()
      }else{
        this.Helpers.errorToast('', 'error deleting account')
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

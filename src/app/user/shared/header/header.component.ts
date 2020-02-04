import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../services/user.service'
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {HelpersService} from '../../services/helpers.service'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService:UserService, private ActiveRoute:ActivatedRoute,
    private helper: HelpersService, private fb: FormBuilder, private router:Router) { }
closeResult:string;
LoginForm:FormGroup;
BusinessAccForm:FormGroup;
UserAccForm:FormGroup
spin:Boolean=false
loggedIn:Boolean;
loggedOut:Boolean;
user:any
invite_acc:Boolean
  ngOnInit() {
    if(localStorage.getItem('user-token')){
      if(this.ActiveRoute.snapshot.data['user'].status==205){
        this.helper.infoToast('Token expired', this.ActiveRoute.snapshot.data['user'].body.message)
        this.helper.logoutAndRedirect()
      }
      this.user= this.ActiveRoute.snapshot.data['user'].body.message;
    }
    if(localStorage.getItem('invite-token')){
      this.invite_acc=true;
    }
    if(localStorage.getItem('user-token')){
      this.loggedIn=true;
    }else{
      this.loggedIn=false;
    }
    if(localStorage.getItem('user-token')){
      this.loggedOut=false
    }else{
      this.loggedOut=true
    }

    this.BusinessAccForm=this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirm_password:['', Validators.required],
      account_type:'Business',
    })

    this.UserAccForm=this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirm_password:['', Validators.required],
      account_type:'Personal',
    })

    this.LoginForm=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })

  }
  logout(){
    localStorage.clear();
    this.router.navigate([''])
    this.helper.infoToast('', 'Logout successful')
  }
  AddPersonalAcc(){
    var formData= this.UserAccForm.value;
    this.spin=true
    if(formData.password!==formData.confirm_password){
      this.helper.infoToast('', 'password and confirm password does not match')
    }else{
      this.userService.create_user(formData).subscribe(response=>{
        this.spin=false
        if(response.status==200){
          this.helper.infoToast('Account created successfully', 'verify email sent to you to login')
          this.UserAccForm=this.fb.group({
            name:['', Validators.required],
            email:['', [Validators.required, Validators.email]],
            password:['', [Validators.required, Validators.minLength(6)]],
            confirm_password:['', Validators.required],
            account_type:'Personal',
          })
        }else{
          this.helper.errorToast('Error', response.body['message'])
        }
      })
    }
    
  }

AddBusinessAcc(){
  var formData=this.BusinessAccForm.value;
  this.spin=true
  if(formData.password!==formData.confirm_password){
    this.helper.infoToast('', 'password and confirm password does not match')
  }else{
    this.userService.create_user(formData).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.helper.infoToast('Account created successfully', 'verify email sent to you to login')
        this.BusinessAccForm=this.fb.group({
          name:['', Validators.required],
          email:['', [Validators.required, Validators.email]],
          password:['', [Validators.required, Validators.minLength(6)]],
          confirm_password:['', Validators.required],
          account_type:'Business',
        })
       
      }else{
        this.helper.errorToast('Error', response.body['message'])
      }
    })
    
  }
}

AccLogin(){
  var formData=this.LoginForm.value;
  this.spin=true
  this.userService.login_user(formData).subscribe(response=>{
    this.spin=false
    if(response.status==200){
      this.modalService.dismissAll()
      if(response.body['biz_acc_token']){
        localStorage.setItem('user-token', response.body['biz_acc_token'])
        localStorage.setItem('invite-token', response.body['message'])
      }else{
        localStorage.setItem('user-token', response.body['token'])
      }
      this.helper.successToast('Login successful', '')
      this.router.navigate(['/user/booking/flight'])
    }else{
      this.helper.errorToast('Error', response.body['message'])
    }
  })
}

  login_google(){
    this.userService.google_register()
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

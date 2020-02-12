import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import {GroupService} from '../../../services/group.service';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private fb:FormBuilder, private modalService: NgbModal,
    private groupService:GroupService, private Helpers:HelpersService) { }
groups:any;
p:number;
p2:number
spin:Boolean=false
selectedGroup:object
addGroup:FormGroup;
editGroupName:FormGroup;
closeResult:string;
addNewEmployeeName:FormGroup;
spinner:Boolean =false;
  ngOnInit() {
    this.groups= this.ActiveRoute.snapshot.data['group']
    this.addGroup=this.fb.group({
        name:['', Validators.required],
        employees:['', Validators.required]
    })
    this.addNewEmployeeName=this.fb.group({
      employees:['', Validators.required]
    })
  }

  addNewGroup(){
    var formData=this.addGroup.value;
    this.spin=true;
    this.groupService.addGroup(formData).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Helpers.successToast('', "New group added successfully");
        this.groups.body.message.docs.push(response.body['message'])
        this.modalService.dismissAll()
      }else{
        this.Helpers.errorToast('', 'error creating new group')
      }
    })
  }

  addNameToGroup(){
    var formData=this.addNewEmployeeName.value;
    this.spin=true;
    this.groupService.addNameToGroup(formData, this.selectedGroup['_id']).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.Helpers.successToast('', 'new employee added successfully')
        var index= this.groups.body.message.docs.findIndex(i => i._id === this.selectedGroup['_id'])
        for (const a of formData.employees.split(',')) {
          this.groups.body.message.docs[index].employees.push(a)
        }
        this.modalService.dismissAll()
        this.addNewEmployeeName=this.fb.group({
          employees:['', Validators.required]
        })
      }else{
        this.Helpers.errorToast('', "error adding new employees")
      }
    })
  }

  editGroup(){
    this.spin=true;
    var formData=this.editGroupName.value;
    this.groupService.editGroup(formData, this.selectedGroup['_id']).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Helpers.successToast('', 'update successful')
        this.modalService.dismissAll()
        var index= this.groups.body.message.docs.findIndex(i => i._id === this.selectedGroup['_id'])
        this.groups.body.message.docs[index].name=formData.name;
      }else{
        this.Helpers.errorToast('', 'error editing group name')
      }
    })
  }

  deleteNameFromGroup(a, id){
    
    console.log()
    var data={
      name:a
    }
    this.spin=true;
    this.groupService.deleteNameFromGroup(id._id, data).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        var index=this.groups.body.message.docs.findIndex(i => i._id === id._id)
        this.groups.body.message.docs[index].employees.splice(this.groups.body.message.docs[index].employees.findIndex(i => i === a), 1)
      }else{
        this.Helpers.errorToast('', response.body['message'])
      }
    })
  }
  paginate(a){
    this.spinner=true;
    this.groupService.getGroups(a, 15).subscribe(response=>{
      this.spinner=false;
      if(response.status==200){
        this.groups=response
      }else{
        this.Helpers.errorToast('', 'error getting data')
      }
    })
  }

  selectGroup(a){
    this.selectedGroup=a
    this.editGroupName=this.fb.group({
      name:[this.selectedGroup['name'], Validators.required]
    })
  }

  deleteGroup(){
    this.spin=true;
    this.groupService.deleteGroup(this.selectedGroup['_id']).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.Helpers.infoToast('', 'group removed successfully')
        this.groups.body.message.docs.splice(this.groups.body.message.docs.findIndex(i => i._id === this.selectedGroup['_id']), 1)
        this.modalService.dismissAll()
      }else{
        this.Helpers.errorToast('', 'error deleting group')
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

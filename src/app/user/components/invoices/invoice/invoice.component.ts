import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ReceiptService} from '../../../services/receipt.service'
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  constructor(private receiptService:ReceiptService, private ActiveRoute:ActivatedRoute, private modalService: NgbModal,
    private Helpers:HelpersService, private fb:FormBuilder ) { }
  spin:Boolean=false
  user:any
  receipt:any
  receiptObject:object
  p:number
  closeResult:string;
  selectedFile:any
  upload_form:FormGroup
  item:any;
  editForm:FormGroup;
  selectedFileExtra:any
  p2:number
  filter_date_form:FormGroup
  init:Boolean=true;
  date_filter:Boolean=false;
  loc_filter:Boolean=false;
  DateFilterValue:any
  LocFilterValue:any
  filter_loc_form:FormGroup
  p3:number;
  p4:number;
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    this.receipt=this.ActiveRoute.snapshot.data['receipt']
    this.upload_form= this.fb.group({
      location:['', Validators.required]
    })
     this.filter_date_form=this.fb.group({
      date:['', Validators.required]
     })
     this.filter_loc_form=this.fb.group({
       loc:['', Validators.required]
     })
    
  }

goBack(){
  this.init=true;
  this.loc_filter=false
  this.date_filter=false
}
  addImg(){
    var fd= new FormData
    this.spin=true
    for(this.item of this.selectedFileExtra){
      fd.append("images[]", this.item, this.item.name)
    }
    this.receiptService.AddImages(this.receiptObject['_id'], fd).subscribe(res=>{
      this.spin=false
      if(res.status==200){
       this.Helpers.successToast('Upload successful', '')
       this.receiptService.getReceiptDetails(this.receiptObject['_id']).subscribe(res=>{
        this.spin=false
          this.receiptObject= res.body['message']
      })
      this.modalService.dismissAll()
      }else{
       this.Helpers.errorToast('Error uploading', '')   
      }
    })
  }
  uploadExtra(event){
    this.selectedFileExtra=event.target.files
}


Edit(){
  var formData =this.editForm.value
  this.spin=true
  this.receiptService.EditReceipt(this.receiptObject['_id'], formData).subscribe(res=>{
    this.spin=false
    if(res.status==200){
     this.Helpers.successToast('', 'update successful')
      this.receiptObject['location']=formData.location
    }else{
      this.Helpers.errorToast('', 'error making update')
    }
  })
}

  getReceiptDetails(id){
    this.spin=true
    this.receiptService.getReceiptDetails(id).subscribe(res=>{
      this.spin=false
      if(res.status==200){
        this.receiptObject= res.body['message']
        this.editForm=this.fb.group({
          location:[this.receiptObject['location'], Validators.required]
        })
      }
    })
  }
  paginateInvoice(a){
    this.spin=true
    this.receiptService.getReceipt(a, 10).subscribe(res=>{
      this.spin=false
      if(res.status==200){
       this.receipt.body.message.docs=res.body['message']['docs']
      }else{
        this.Helpers.errorToast('', 'error getting invoice')
      }
    })
  }

  deleteReceipt(){
    this.spin=true
    this.receiptService.deleteReceipt(this.receiptObject['_id']).subscribe(res=>{
      this.spin=false
      if(res.status==200){
        this.modalService.dismissAll();
        this.Helpers.successToast('', "receipt deleted successfully")
        if(this.init==true){
          this.receipt.body.message.docs.splice(this.receipt.body.message.docs.findIndex(i => i._id === this.receiptObject['_id']), 1)
        }else if(this.date_filter==true){
          this.DateFilterValue.docs.splice(this.DateFilterValue.docs.findIndex(i => i._id === this.receiptObject['_id']), 1)
        }else if(this.loc_filter==true){
          this.LocFilterValue.docs.splice(this.LocFilterValue.docs.findIndex(i => i._id === this.receiptObject['_id']), 1)
        }
this.receiptObject=undefined;
      }
    })
  }

  deletePics(a){
    var data={
      images:a
    }
    this.spin=true
    this.receiptService.deleteReceiptImage(this.receiptObject['_id'], data).subscribe(res=>{
      this.spin=false
      if(res.status==200){
        var index=this.receiptObject['images'].indexOf(a)
        this.receiptObject['images'].splice(index, 1)
       this.Helpers.successToast('', "image removed successfully")
      }else{
        this.Helpers.errorToast('', 'error deleting image')
      }
    })
  }

  upload(event){
    
    this.selectedFile=event.target.files
  
}
  uploadReceipt(){
    var fd= new FormData
    this.spin=true
    for(this.item of this.selectedFile){
      fd.append("images[]", this.item, this.item.name)
    }
    var formData=this.upload_form.value
      fd.append("location", formData.location)
     
      this.receiptService.addReceipt(fd).subscribe(res=>{
        this.spin=false  
        if(res.status){
          this.receipt.body.message.docs>0
          this.receipt.body.message.docs.push(res.body['message'])
          this.Helpers.successToast('Upload successful', '')
          this.modalService.dismissAll()
        }else{
         this.Helpers.errorToast('Error uploading', '')
        }
      })
  }

  filterViaDate(){
    var formData=this.filter_date_form.value
   var b= new Date(formData.date)
    var day=b.getDate();
   var month=b.getMonth() +1;
   var year=b.getFullYear();
   this.spin=true
   this.receiptService.getReceiptByDate(year + '-' + month + '-' + day, 1, 10).subscribe(res=>{
     this.spin=false
      if(res.status==200){
        this.init=false
        this.loc_filter=false
        this.date_filter=true
        this.DateFilterValue=res.body['message']
      }else{
        this.Helpers.errorToast('', 'error getting result')
      }
     
   })
  }
  filterViaLocation(){
    var formData=this.filter_loc_form.value
    this.spin=true;
    this.receiptService.getReceiptByLocation(formData.loc, 1, 10).subscribe(res=>{
      this.spin=false
      if(res.status==200){
        this.init=false
        this.loc_filter=true;
        this.date_filter=false;
        this.LocFilterValue=res.body['message']
      }else{
        this.Helpers.errorToast('', 'error getting result')
      }
    })
  }
  paginateDateFilter(a){
    var formData=this.filter_date_form.value
    var b= new Date(formData.date)
     var day=b.getDate();
    var month=b.getMonth() +1;
    var year=b.getFullYear();
    this.spin=true
    this.receiptService.getReceiptByDate(year + '-' + month + '-' + day, a, 10).subscribe(res=>{
      this.spin=false
       if(res.status==200){
         this.DateFilterValue=res.body['message']
       }else{
         this.Helpers.errorToast('', 'error getting result')
       }
      
    })

  }
  paginateLocFilter(a){
    var formData=this.filter_loc_form.value
    this.spin=true;
    this.receiptService.getReceiptByLocation(formData.loc, a, 10).subscribe(res=>{
      this.spin=false
      if(res.status==200){
        this.LocFilterValue=res.body['message']
      }else{
        this.Helpers.errorToast('', 'error getting result')
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

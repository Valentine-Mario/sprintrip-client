import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trains-list',
  templateUrl: './trains-list.component.html',
  styleUrls: ['./trains-list.component.css']
})
export class TrainsListComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private modalService: NgbModal) { }
  flight:any
  closeResult:string;
  
  ngOnInit() {
    this.flight=this.ActiveRoute.snapshot.data['flight']

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-airbnb-list',
  templateUrl: './airbnb-list.component.html',
  styleUrls: ['./airbnb-list.component.css']
})
export class AirbnbListComponent implements OnInit {
  airbnb:any;
  closeResult:string
  constructor(private ActiveRoute:ActivatedRoute,  private modalService:NgbModal) { }

  ngOnInit() {
    this.airbnb= this.ActiveRoute.snapshot.data['venue'];

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

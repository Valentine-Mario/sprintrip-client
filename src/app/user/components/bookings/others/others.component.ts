import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  closeResult:string
  personal_asst:Boolean=true;
  concierge:Boolean;
  interpreter:Boolean;
  content_writer:Boolean;
  leadership_coach:Boolean;
  consultant:Boolean;
  graphic_designer:Boolean;
  audio_visual_asst:Boolean
  ngOnInit() {
  }

  show_personal_asst(){
    this.personal_asst=true; this.concierge=false; this.interpreter=false; this.content_writer=false;
    this.leadership_coach=false; this.consultant=false; this.graphic_designer=false;
    this.audio_visual_asst=false;
  }

  show_concierge(){
    this.personal_asst=false; this.concierge=true; this.interpreter=false; this.content_writer=false;
    this.leadership_coach=false; this.consultant=false; this.graphic_designer=false;
    this.audio_visual_asst=false;
  }

  show_interpreter(){
    this.personal_asst=false; this.concierge=false; this.interpreter=true; this.content_writer=false;
    this.leadership_coach=false; this.consultant=false; this.graphic_designer=false;
    this.audio_visual_asst=false;
  }

  show_content_writer(){
    this.personal_asst=false; this.concierge=false; this.interpreter=false; this.content_writer=true;
    this.leadership_coach=false; this.consultant=false; this.graphic_designer=false;
    this.audio_visual_asst=false;
  }

  show_leadership_coach(){
    this.personal_asst=false; this.concierge=false; this.interpreter=false; this.content_writer=false;
    this.leadership_coach=true; this.consultant=false; this.graphic_designer=false;
    this.audio_visual_asst=false;
  }

  show_consultant(){
    this.personal_asst=false; this.concierge=false; this.interpreter=false; this.content_writer=false;
    this.leadership_coach=false; this.consultant=true; this.graphic_designer=false;
    this.audio_visual_asst=false;
  }

  show_graphic_designer(){
    this.personal_asst=false; this.concierge=false; this.interpreter=false; this.content_writer=false;
    this.leadership_coach=false; this.consultant=false; this.graphic_designer=true;
    this.audio_visual_asst=false;
  }

  show_audio_video_asst(){
    this.personal_asst=false; this.concierge=false; this.interpreter=false; this.content_writer=false;
    this.leadership_coach=false; this.consultant=false; this.graphic_designer=false;
    this.audio_visual_asst=true;
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

import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-kategorie',
  templateUrl: './kategorie.component.html',
  styleUrls: ['./kategorie.component.css']
})
export class KategorieComponent{
  public bezeichnung: string = '';

  constructor(public activeModal: NgbActiveModal) { }




  save() {
    console.log(this.bezeichnung)
    if (this.bezeichnung.trim().length > 0) {
      this.activeModal.close(this.bezeichnung);
    }
  }


}

import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Priority} from "../Priority";


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  public title: string = '';
  public priority: any;

  constructor(public activeModal: NgbActiveModal) {
  }

  save() {
    if (this.title.trim().length > 0) {
      this.activeModal.close({ title: this.title, priority: this.priority });
    }
  }
}

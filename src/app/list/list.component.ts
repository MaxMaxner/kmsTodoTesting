import {Component, Input, OnInit} from '@angular/core';
import {ToDoEntry} from "../ToDoEntry";
import {AddTodoComponent} from "../add-todo/add-todo.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list!: ToDoEntry[];

  constructor(private modalService: NgbModal, public todoService: TodoService) {
  }
}

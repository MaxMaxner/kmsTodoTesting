import {Component, Input, OnInit} from '@angular/core';
import {ToDoEntry} from "../ToDoEntry";
import {AddTodoComponent} from "../add-todo/add-todo.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TodoService} from "../todo.service";

let bool : boolean = true;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() list!: ToDoEntry[];

  constructor(private modalService: NgbModal, public todoService: TodoService) {
  }

  sort(toSort: string){
    switch(toSort){
        case 'title':
          console.log(bool);
          if(bool){
            this.todoService.todoList.sort((a, b) => a.title < b.title ? -1 : 1);
            bool = false;
          } else {
            this.todoService.todoList.sort((a, b) => a.title > b.title ? -1 : 1);
            bool = true;
          }
          break;
        case 'date':  
        console.log(bool);
        if(bool){
          this.todoService.todoList.sort((a, b) => a.date < b.date ? -1 : 1);
          bool = false;
        } else {
          this.todoService.todoList.sort((a, b) => a.date > b.date ? -1 : 1);
          bool = true;
        }
          break;
    }
  }
}

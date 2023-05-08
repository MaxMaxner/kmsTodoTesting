import {Component} from '@angular/core';
import {TodoService} from "./todo.service";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Priority} from "./Priority";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-Manager';
  prio: Priority = Priority.Normal;


  constructor(private modalService: NgbModal, public todoService: TodoService) {
  }

  async addClicked() {
    try {
      const { title, priority } = await this.modalService.open(AddTodoComponent).result;
      this.todoService.addTodo(title, priority);
    } catch (err) {
      console.log("Window closed...", err);
    }
  }
}

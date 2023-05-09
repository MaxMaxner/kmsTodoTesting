import {Component} from '@angular/core';
import {TodoService} from "./todo.service";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {KategorieComponent} from "./kategorie/kategorie.component";
import {Kategorie} from "./Kategorie";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-Manager';

  constructor(private modalService: NgbModal, public todoService: TodoService) {
  }

  async addTodoClicked() {
    try {
      const title = await this.modalService.open(AddTodoComponent).result;
      this.todoService.addTodo(title);

    } catch (err) {
      console.log("Window closed...", err);
    }
  }
}


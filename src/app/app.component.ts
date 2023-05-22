import { Component } from '@angular/core'
import { TodoService } from './todo.service'
import { AddTodoComponent } from './add-todo/add-todo.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Priority } from './Priority'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'ToDo-Manager'

    constructor(private modalService: NgbModal, public todoService: TodoService) {}

    async addTodoClicked() {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const { title, priority }: { title: string; priority: Priority } =
                await this.modalService.open(AddTodoComponent).result
            this.todoService.addTodo(title, priority)
        } catch (err) {
            console.log('Window closed...', err)
        }
    }
}

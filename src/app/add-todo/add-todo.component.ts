import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Priority } from '../Priority'

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
    public title = ''
    public priority: Priority = Priority.Normal

    constructor(public activeModal: NgbActiveModal) {}

    save() {
        if (this.title.trim().length > 0) {
            this.activeModal.close({
                title: this.title,
                priority: this.priority,
            })
        }
    }

    protected readonly Priority = Priority
}



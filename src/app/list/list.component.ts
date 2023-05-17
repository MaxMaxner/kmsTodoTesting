import { Component, Input } from '@angular/core'
import { ToDoEntry } from '../ToDoEntry'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { TodoService } from '../todo.service'
import { KategorieComponent } from '../kategorie/kategorie.component'

let bool = true

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    @Input() list!: ToDoEntry[]

    constructor(
        private modalService: NgbModal,
        public todoService: TodoService
    ) {}

    async addKategorieClicked(index: number) {
        try {
            const bezeichnung = await this.modalService.open(KategorieComponent)
                .result
            this.todoService.addBezeichnung(bezeichnung, index)
        } catch (err) {
            console.log('Window closed...', err)
        }
    }
    ngOnInit() {
        this.list = this.todoService.prioritySort(this.list)
        console.log(this.list)
    }

    sort(toSort: string) {
        switch (toSort) {
            case 'title':
                console.log(bool)
                if (bool) {
                    this.todoService.todoList.sort((a, b) =>
                        a.title < b.title ? -1 : 1
                    )
                    this.todoService.doneList.sort((a, b) =>
                        a.title < b.title ? -1 : 1
                    )
                    bool = false
                } else {
                    this.todoService.todoList.sort((a, b) =>
                        a.title > b.title ? -1 : 1
                    )
                    this.todoService.doneList.sort((a, b) =>
                        a.title > b.title ? -1 : 1
                    )
                    bool = true
                }
                break
            case 'date':
                console.log(bool)
                if (bool) {
                    this.todoService.todoList.sort((a, b) =>
                        a.date < b.date ? -1 : 1
                    )
                    this.todoService.doneList.sort((a, b) =>
                        a.date < b.date ? -1 : 1
                    )
                    bool = false
                } else {
                    this.todoService.todoList.sort((a, b) =>
                        a.date > b.date ? -1 : 1
                    )
                    this.todoService.doneList.sort((a, b) =>
                        a.date > b.date ? -1 : 1
                    )
                    bool = true
                }
                break
        }
    }
}

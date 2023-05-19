import { Component, Input } from '@angular/core'
import { ToDoEntry } from '../ToDoEntry'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { TodoService } from '../todo.service'
import { KategorieComponent } from '../kategorie/kategorie.component'
import { Priority } from '../Priority'

let toDoSort = true
let doneSort = true

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent {
    @Input() list!: ToDoEntry[]

    constructor(private modalService: NgbModal, public todoService: TodoService) {}

    async addKategorieClicked(index: number) {
        try {
            const bezeichnung = await this.modalService.open(KategorieComponent).result
            this.todoService.addBezeichnung(bezeichnung, index)
        } catch (err) {
            console.log('Window closed...', err)
        }
    }
    ngOnInit() {
        this.list = this.todoService.prioritySort(this.list)
        console.log(this.list)
    }

    alphaNumSort(toSort: string) {
        toDoSort = this.sortBy(toSort, this.todoService.todoList, toDoSort)
        doneSort = this.sortBy(toSort, this.todoService.doneList, doneSort)
    }

    sortBy(toSort: string, list: ToDoEntry[], bool: boolean) {
        console.log(toSort)
        if (bool) {
            if (toSort != 'priority') list.sort((a, b) => (a[toSort] < b[toSort] ? -1 : 1))
            else {
                const priorityValues = {
                    [Priority.Showstopper]: 4,
                    [Priority.High]: 3,
                    [Priority.Normal]: 2,
                    [Priority.Low]: 1,
                }
                list.sort((a, b) => priorityValues[b.priority] - priorityValues[a.priority])
            }
            return (bool = false)
        } else {
            if (toSort != 'priority') list.sort((a, b) => (a[toSort] > b[toSort] ? -1 : 1))
            else {
                const priorityValues = {
                    [Priority.Showstopper]: 4,
                    [Priority.High]: 3,
                    [Priority.Normal]: 2,
                    [Priority.Low]: 1,
                }
                list.sort((a, b) => priorityValues[a.priority] - priorityValues[b.priority])
            }
            return (bool = true)
        }
    }
}

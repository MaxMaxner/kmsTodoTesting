import { Component, OnInit } from '@angular/core'
import { TodoService } from '../todo.service'
import { ToDoEntry } from '../ToDoEntry'

let fullToDoList: ToDoEntry[] = []
let fullDoneList: ToDoEntry[] = []

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
    constructor(public todoService: TodoService) {}

    ngOnInit(): void {
        fullToDoList = this.todoService.todoList
        fullDoneList = this.todoService.doneList
    }

    filterList(e: Event) {
        const input = e.target as HTMLInputElement;
        let searchstring: string;
        if(input.value != null){
            searchstring = input.value;
        } else {
            searchstring = '';
        }

        const newToDoList = this.testList(fullToDoList, searchstring)
        const newDoneList = this.testList(fullDoneList, searchstring)

        if (searchstring != '') {
            this.todoService.todoList = newToDoList
            this.todoService.doneList = newDoneList
        } else {
            this.todoService.todoList = fullToDoList
            this.todoService.doneList = fullDoneList
        }
    }

    testList(list: ToDoEntry[], searchstring: string) {
        const newList = []
        for (let i = 0; i < list.length; i++) {
            const title: string = list[i].title.toLowerCase()
            const priority = list[i].priority.toLowerCase()
            let kategorie: string | undefined = list[i].kategorie;
            if(kategorie != undefined){
                kategorie.toLowerCase();
            } else {
                kategorie = '';
            }
            if (
                title.includes(searchstring) ||
                priority.includes(searchstring) ||
                kategorie.includes(searchstring)
            ) {
                newList.push(list[i])
            }
        }
        return newList
    }
}

import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

let fullToDoList: any = [];
let fullDoneList: any = [];

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    fullToDoList = this.todoService.todoList;
    fullDoneList = this.todoService.doneList;
  }

  filterList($event : any){
    let searchstring: string = $event.target.value.toLowerCase();
    console.log(searchstring);

    let newToDoList = this.testList(fullToDoList, searchstring);
    let newDoneList = this.testList(fullDoneList, searchstring);

    if(searchstring != ""){
      this.todoService.todoList = newToDoList;
      this.todoService.doneList = newDoneList;
    } else {
      this.todoService.todoList = fullToDoList;
      this.todoService.doneList = fullDoneList;
    }
  }

  testList(list: any, searchstring: string){
    let newList = [];
    for(let i = 0; i < list.length; i++){
      let title = list[i].title.toLowerCase();
      let priority = list[i].priority.toLowerCase();
      let kategorie = "";
      if(list[i].kategorie != null){
        kategorie = list[i].kategorie.toLowerCase();
      }
      if(title.includes(searchstring) || priority.includes(searchstring) || kategorie.includes(searchstring)){
        newList.push(list[i])
      }
    }
    return newList;
  }
}

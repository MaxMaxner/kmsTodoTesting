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
    let searchstring: string = $event.target.value;
    let newToDoList = [];
    let newDoneList = [];
    console.log(searchstring);
    if(searchstring != ""){
      for(let i = 0; i < fullToDoList.length; i++){
        if(fullToDoList[i].title.includes(searchstring)){
          newToDoList.push(fullToDoList[i])
        }
      }
    } else {
      newToDoList = fullToDoList;
    }
    if(searchstring != ""){
      for(let i = 0; i < fullDoneList.length; i++){
        if(fullDoneList[i].title.includes(searchstring)){
          newDoneList.push(fullToDoList[i])
        }
      }
    } else {
      newDoneList = fullDoneList;
    }
    this.todoService.todoList = newToDoList;
    this.todoService.doneList = newDoneList;
  }
}

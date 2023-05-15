import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  filterList($event : any){
    let searchstring: string = $event.target.value;
    let fullList = this.todoService.todoList;
    console.log(searchstring);
    let newList = this.todoService.todoList.filter(o => 
      {
        for(let k in o)
          {
            if(o["title"].includes(searchstring))
            { 
              console.log(o["title"]);
              return o
            }
          } 
        if(searchstring == ""){
          return fullList;
        }
          console.log("hello");
          return;
      });

    this.todoService.todoList = newList;
  }

}

import { Injectable } from '@angular/core';
import {ToDoEntry} from "./ToDoEntry";
import {Kategorie} from "./Kategorie";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: ToDoEntry[] = [
    new ToDoEntry('Milch', "Lebensmittel"),
    new ToDoEntry('Butter', "Lebensmitte"),
    new ToDoEntry('Brot', "Lebensmittel")
  ];

  public KategorieList: Kategorie[] = [
    new Kategorie("Einkaufsliste"),
    new Kategorie("Haushhalt"),
    new Kategorie("Uni")
  ]

  public doneList: ToDoEntry[] = []

  constructor() { }

  addTodo(title: string): void {
    this.todoList.push(new ToDoEntry(title));
  }

  deleteTodo(index: number): void {
    this.doneList.splice(index, 1);
  }

  markDone(index: number): void {
    this.todoList[index].done = true;
    this.doneList.push(this.todoList[index]);
    this.todoList.splice(index, 1);
  }

  markUndone(index: number) {
    this.doneList[index].done = false;
    this.todoList.push(this.doneList[index]);
    this.doneList.splice(index, 1);
  }

  addBezeichnung(name: string, index: number){
    this.todoList[index].kategorie = name;
  }
}

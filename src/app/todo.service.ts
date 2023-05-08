import { Injectable } from '@angular/core';
import {ToDoEntry} from "./ToDoEntry";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: ToDoEntry[] = [
    new ToDoEntry('Milch'),
    new ToDoEntry('Butter'),
    new ToDoEntry('Brot')
  ];

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
}

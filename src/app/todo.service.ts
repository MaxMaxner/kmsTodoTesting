import {Injectable} from '@angular/core';
import {ToDoEntry} from "./ToDoEntry";
import {Priority} from "./Priority";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoList: ToDoEntry[] = [
    new ToDoEntry('Milch', Priority.Normal),
    new ToDoEntry('Butter', Priority.Showstopper),
    new ToDoEntry('Brot', Priority.Low)
  ];

  public doneList: ToDoEntry[] = []

  constructor() { }

  addTodo(title: string, priority: Priority): void {
    this.todoList.push(new ToDoEntry(title, priority));
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

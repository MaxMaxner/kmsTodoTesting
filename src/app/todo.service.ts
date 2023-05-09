import {Injectable} from '@angular/core';
import {ToDoEntry} from "./ToDoEntry";
import {Kategorie} from "./Kategorie";
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

  public KategorieList: Kategorie[] = [
    new Kategorie("Einkaufsliste"),
    new Kategorie("Haushhalt"),
    new Kategorie("Uni")
  ]

  public doneList: ToDoEntry[] = []

  constructor() { }

  addTodo(title: string, priority: Priority): void {
    this.todoList.push(new ToDoEntry(title, priority));
    this.prioritySort(this.todoList);
  }

  deleteTodo(index: number): void {
    this.doneList.splice(index, 1);
    this.prioritySort(this.todoList);
  }

  markDone(index: number): void {
    this.todoList[index].done = true;
    this.doneList.push(this.todoList[index]);
    this.todoList.splice(index, 1);
    this.prioritySort(this.todoList);
  }

  markUndone(index: number) {
    this.doneList[index].done = false;
    this.todoList.push(this.doneList[index]);
    this.doneList.splice(index, 1);
    this.prioritySort(this.todoList);
  }

  addBezeichnung(name: string, index: number){
    this.todoList[index].kategorie = name;
  }

  prioritySort(todoList: ToDoEntry[]): ToDoEntry[] {
    const priorityValues = {
      [Priority.Showstopper]: 4,
      [Priority.High]: 3,
      [Priority.Normal]: 2,
      [Priority.Low]: 1,
    };
    return todoList.sort((a, b) => priorityValues[b.priority] - priorityValues[a.priority]);
  }

}

import {Priority} from "./Priority";

export class ToDoEntry {
  title: string;
  done: boolean;
  date: Date;
  priority: Priority;

  constructor(title: string, priority: Priority = Priority.Normal) {
    this.title = title;
    this.date = new Date();
    this.done = false;
    this.priority = priority;
  }
}

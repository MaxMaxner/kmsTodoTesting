import {Kategorie} from "./Kategorie";

export class ToDoEntry {
  title: string;
  done: boolean;
  date: Date;
  kategorie? : string;

  constructor(title: string, kategorie?: string) {
    this.title = title;
    this.date = new Date();
    this.done = false;
    this.kategorie = kategorie;
  }
}

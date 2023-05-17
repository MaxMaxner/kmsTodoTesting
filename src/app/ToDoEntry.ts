import { Priority } from './Priority'

export class ToDoEntry {
    title: string
    done: boolean
    date: Date
    priority: Priority
    kategorie?: string

    constructor(
        title: string,
        priority: Priority = Priority.Normal,
        kategorie?: string
    ) {
        this.title = title
        this.date = new Date()
        this.done = false
        this.kategorie = kategorie
        this.priority = priority
    }
}

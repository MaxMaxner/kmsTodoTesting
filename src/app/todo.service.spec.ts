import { TestBed } from '@angular/core/testing'

import { TodoService } from './todo.service'
import { ToDoEntry } from './ToDoEntry'
import { Priority } from './Priority'

describe('TodoService', () => {
    let service: TodoService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(TodoService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should sort by priority', () => {
        const mockToDoList: ToDoEntry[] = [
            { title: 'Milch', done: false, date: new Date(), priority: Priority.Low },
            { title: 'Salat', done: false, date: new Date(), priority: Priority.High },
            { title: 'Käse', done: false, date: new Date(), priority: Priority.Normal },
        ]

        const SortedMockToDoList: ToDoEntry[] = [
            { title: 'Salat', done: false, date: new Date(), priority: Priority.High },
            { title: 'Käse', done: false, date: new Date(), priority: Priority.Normal },
            { title: 'Milch', done: false, date: new Date(), priority: Priority.Low },
        ]

        const sortedList = service.prioritySort(mockToDoList)

        expect(sortedList).toEqual(SortedMockToDoList)
    })

    it('should mark as done', () => {
        service.markDone(0)
        expect(service.doneList.length).toBe(1)
    })

    it('should add a bezeichung', () => {
        service.addBezeichnung('test', 0)
        expect(service.todoList[0].kategorie).toBe('test')
    })

    it('should create a new List', () => {
        service.addTodo('Todo 1', Priority.Normal)
        expect(service.todoList.length).toBe(4)
    })

    it('should delete a list', () => {
        service.deleteTodo(service.todoList.length - 1)
        expect(service.todoList.length).toBe(3)
    })
})

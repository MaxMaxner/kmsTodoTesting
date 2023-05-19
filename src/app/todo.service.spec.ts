import { TestBed } from '@angular/core/testing'

import { TodoService } from './todo.service'
import { ToDoEntry } from './ToDoEntry'
import { Priority } from './Priority'

describe('TodoService', () => {
    let service: TodoService
    const mockToDoList: ToDoEntry[] = [
        { title: 'Milch', done: false, date: new Date(), priority: Priority.Low },
        { title: 'Salat', done: false, date: new Date(), priority: Priority.High },
        { title: 'Käse', done: false, date: new Date(), priority: Priority.Normal }
      ];

    const SortedMockToDoList: ToDoEntry[] = [
        { title: 'Salat', done: false, date: new Date(), priority: Priority.High },
        { title: 'Käse', done: false, date: new Date(), priority: Priority.Normal },
        { title: 'Milch', done: false, date: new Date(), priority: Priority.Low }
      ];

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(TodoService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should sort by priority', ()=>{
        const sortedList = service.prioritySort(mockToDoList)

        expect(sortedList).toEqual(SortedMockToDoList)
    })
})

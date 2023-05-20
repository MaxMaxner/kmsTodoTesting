import { ListComponent } from './list.component'
import { TodoService } from '../todo.service'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { KategorieComponent } from '../kategorie/kategorie.component'
import { ToDoEntry } from '../ToDoEntry'
import { Priority } from '../Priority'

describe('ListComponent', () => {
    let component: ListComponent
    let modalService: NgbModal
    let todoService: TodoService
    const mockToDoList: ToDoEntry[] = [
        {
            title: 'B',
            done: false,
            date: new Date(),
            priority: Priority.Low,
            kategorie: 'first',
        },
        {
            title: 'C',
            done: false,
            date: new Date(),
            priority: Priority.High,
            kategorie: 'middle',
        },
        {
            title: 'A',
            done: false,
            date: new Date(),
            priority: Priority.Normal,
            kategorie: 'last',
        },
    ]

    beforeEach(() => {
        modalService = jasmine.createSpyObj('NgbModal', ['open'])
        todoService = jasmine.createSpyObj('TodoService', ['addBezeichnung', 'prioritySort'])
        component = new ListComponent(modalService, todoService)
    })

    it('should have todos', () => {
        const mockToDoEntries: ToDoEntry[] = [
            { title: 'Task 1', done: false, date: new Date(), priority: Priority.Low },
            { title: 'Task 2', done: false, date: new Date(), priority: Priority.Normal },
            { title: 'Task 3', done: false, date: new Date(), priority: Priority.High },
        ]
        component.list = mockToDoEntries

        expect(component.list.length).toBe(mockToDoEntries.length)
    })

    it('should add a category when addCategoryClicked is called', async () => {
        const mockIndex = 0
        const mockModalRef: Partial<NgbModalRef> = {
            close: jasmine.createSpy('close'),
            dismiss: jasmine.createSpy('dismiss'),
            componentInstance: {},
            result: Promise.resolve('Category'),
        }

        ;(modalService.open as jasmine.Spy).and.returnValue(mockModalRef)

        await component.addKategorieClicked(mockIndex)

        expect(modalService.open).toHaveBeenCalledWith(KategorieComponent)
        expect(todoService.addBezeichnung).toHaveBeenCalledWith('Category', mockIndex)
    })

    it('should sort by Title', () => {
        //sort by Title Ascending
        component.sortBy('title', mockToDoList, true)
        expect([
            mockToDoList[0].title,
            mockToDoList[0].priority,
            mockToDoList[0].kategorie,

            mockToDoList[1].title,
            mockToDoList[1].priority,
            mockToDoList[1].kategorie,

            mockToDoList[2].title,
            mockToDoList[2].priority,
            mockToDoList[2].kategorie,
        ]).toEqual([
            'A',
            Priority.Normal,
            'last',

            'B',
            Priority.Low,
            'first',

            'C',
            Priority.High,
            'middle',
        ])

        //sort by Title Descending
        component.sortBy('title', mockToDoList, false)
        expect([
            mockToDoList[0].title,
            mockToDoList[0].priority,
            mockToDoList[0].kategorie,

            mockToDoList[1].title,
            mockToDoList[1].priority,
            mockToDoList[1].kategorie,

            mockToDoList[2].title,
            mockToDoList[2].priority,
            mockToDoList[2].kategorie,
        ]).toEqual([
            'C',
            Priority.High,
            'middle',

            'B',
            Priority.Low,
            'first',

            'A',
            Priority.Normal,
            'last',
        ])
    })

    it('should sort by Priority', () => {
        //sort by Priority Ascending
        component.sortBy('priority', mockToDoList, true)
        expect([
            mockToDoList[0].title,
            mockToDoList[0].priority,
            mockToDoList[0].kategorie,

            mockToDoList[1].title,
            mockToDoList[1].priority,
            mockToDoList[1].kategorie,

            mockToDoList[2].title,
            mockToDoList[2].priority,
            mockToDoList[2].kategorie,
        ]).toEqual([
            'C',
            Priority.High,
            'middle',

            'A',
            Priority.Normal,
            'last',

            'B',
            Priority.Low,
            'first',
        ])

        //sort by Priority Descending
        component.sortBy('priority', mockToDoList, false)
        expect([
            mockToDoList[0].title,
            mockToDoList[0].priority,
            mockToDoList[0].kategorie,

            mockToDoList[1].title,
            mockToDoList[1].priority,
            mockToDoList[1].kategorie,

            mockToDoList[2].title,
            mockToDoList[2].priority,
            mockToDoList[2].kategorie,
        ]).toEqual([
            'B',
            Priority.Low,
            'first',

            'A',
            Priority.Normal,
            'last',

            'C',
            Priority.High,
            'middle',
        ])
    })

    it('should sort by Katergory', () => {
        //sort by Kategory Ascending
        component.sortBy('kategorie', mockToDoList, true)
        expect([
            mockToDoList[0].title,
            mockToDoList[0].priority,
            mockToDoList[0].kategorie,

            mockToDoList[1].title,
            mockToDoList[1].priority,
            mockToDoList[1].kategorie,

            mockToDoList[2].title,
            mockToDoList[2].priority,
            mockToDoList[2].kategorie,
        ]).toEqual([
            'B',
            Priority.Low,
            'first',

            'A',
            Priority.Normal,
            'last',

            'C',
            Priority.High,
            'middle',
        ])

        //sort by Kategory Descending
        component.sortBy('kategorie', mockToDoList, false)
        expect([
            mockToDoList[0].title,
            mockToDoList[0].priority,
            mockToDoList[0].kategorie,

            mockToDoList[1].title,
            mockToDoList[1].priority,
            mockToDoList[1].kategorie,

            mockToDoList[2].title,
            mockToDoList[2].priority,
            mockToDoList[2].kategorie,
        ]).toEqual([
            'C',
            Priority.High,
            'middle',

            'A',
            Priority.Normal,
            'last',

            'B',
            Priority.Low,
            'first',
        ])
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})

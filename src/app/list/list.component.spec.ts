import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ListComponent } from './list.component'
import { TodoService } from '../todo.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

describe('ListComponent', () => {
    let component: ListComponent
    let fixture: ComponentFixture<ListComponent>
    let modalService: NgbModal

    beforeEach(async () => {
        const todoServiceSpy = jasmine.createSpyObj<TodoService>([
            'prioritySort',
        ])
        todoServiceSpy.prioritySort.and.returnValue(todoServiceSpy.todoList)

        component = new ListComponent(modalService, todoServiceSpy)
        component.ngOnInit

        fixture = TestBed.createComponent(ListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should have todos', () => {
        expect(component.list.length).toBe(3)
    })
})

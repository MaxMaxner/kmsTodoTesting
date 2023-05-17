import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { AddTodoComponent } from './add-todo.component'

describe('AddTodoComponent', () => {
    let component: AddTodoComponent
    let fixture: ComponentFixture<AddTodoComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddTodoComponent],
            providers: [NgbActiveModal],
        }).compileComponents()

        fixture = TestBed.createComponent(AddTodoComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})

import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchbarComponent } from './searchbar.component'
import { ToDoEntry } from '../ToDoEntry'
import { Priority } from '../Priority'

describe('SearchbarComponent', () => {
    let component: SearchbarComponent
    let fixture: ComponentFixture<SearchbarComponent>
    let list: ToDoEntry[] = [
        new ToDoEntry('Milch', Priority.Normal),
        new ToDoEntry('Butter', Priority.Showstopper),
        new ToDoEntry('Brot', Priority.Low),
    ]

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchbarComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(SearchbarComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should return the correct toDo', () => {
        let test = component.testList(list, 'milch')

        expect(test.length).toEqual(1)
        expect(test[0].title).toEqual('Milch')
    })
})

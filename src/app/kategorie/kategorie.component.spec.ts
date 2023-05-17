import { ComponentFixture, TestBed } from '@angular/core/testing'
import { KategorieComponent } from './kategorie.component'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

//Schaut in Vanilla Version, ob die Komponente überhaupt gerendet wird
describe('KateogorieComponent', () => {
    let component: KategorieComponent
    let fixture: ComponentFixture<KategorieComponent>

    //bringt HTML CCS und TS in einem Zusammen
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [NgbActiveModal],
            declarations: [KategorieComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(KategorieComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
    it('should not close the active modal if bezeichnung is empty', () => {
        const mockActiveModal = jasmine.createSpyObj('NgbActiveModal', [
            'close',
        ])
        const component = new KategorieComponent(mockActiveModal)
        component.bezeichnung = ''
        component.save()
        expect(mockActiveModal.close).not.toHaveBeenCalled()
    })

    it('should close the active modal if bezeichnung is not empty', () => {
        const mockActiveModal = jasmine.createSpyObj('NgbActiveModal', [
            'close',
        ])
        const component = new KategorieComponent(mockActiveModal)
        component.bezeichnung = 'Example'

        component.save()

        expect(mockActiveModal.close).toHaveBeenCalledWith('Example')
    })
    it('should not close the active modal if the bezeichnung contains only whitespace', () => {
        const mockActiveModal = jasmine.createSpyObj('NgbActiveModal', [
            'close',
        ])
        const component = new KategorieComponent(mockActiveModal)
        component.bezeichnung = '    '

        component.save()

        expect(mockActiveModal.close).not.toHaveBeenCalled()
    })
})

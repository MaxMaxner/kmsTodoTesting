import {ComponentFixture, TestBed} from '@angular/core/testing'
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import {AddTodoComponent} from './add-todo.component'

describe('AddTodoComponent', () => {
  let component: AddTodoComponent
  let fixture: ComponentFixture<AddTodoComponent>

  // setup function that is executed before each test case (sets up the test environment)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      providers: [NgbActiveModal],
    }).compileComponents()

    fixture = TestBed.createComponent(AddTodoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  // checks if the AddTodoComponent is successfully created (vanilla .spec file)
  it('should create', () => {
    expect(component).toBeTruthy()
  })


  /*********************************************************************************************************************
   *                                                UNIT TESTS
   ********************************************************************************************************************/

  it('should not save if title is empty', () => {
    spyOn(component.activeModal, 'close'); // mock funcion for "activeModal.close"

    // Set an empty title
    component.title = '';
    component.save();

    // Expect the activeModal.close method not to have been called
    expect(component.activeModal.close).not.toHaveBeenCalled(); // determines the expected behavior
  });


  it('should save if title is not empty', () => {
    spyOn(component.activeModal, 'close');

    // Set a non-empty title
    component.title = 'Test Todo';
    component.save();

    // Expect the activeModal.close method to have been called
    expect(component.activeModal.close).toHaveBeenCalled(); // determines the expected behavior
    expect(component.activeModal.close).toHaveBeenCalledWith({
      title: 'Test Todo',
      priority: component.priority,
    });
  });


  it('should not save if title consists of one or more spaces only', () => {
    spyOn(component.activeModal, 'close');

    // Set title with spaces
    component.title = '    ';
    component.save();

    // Expect the activeModal.close method not to have been called
    expect(component.activeModal.close).not.toHaveBeenCalled();
  });


})

import { ListComponent } from './list.component';
import { TodoService } from '../todo.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { KategorieComponent } from '../kategorie/kategorie.component';
import { ToDoEntry } from '../ToDoEntry';
import { Priority } from '../Priority';

describe('ListComponent', () => {
  let component: ListComponent;
  let modalService: NgbModal;
  let todoService: TodoService;
  
  beforeAll(() => {
    modalService = jasmine.createSpyObj('NgbModal', ['open']);
    todoService = jasmine.createSpyObj('TodoService', ['addBezeichnung', 'prioritySort']);
    component = new ListComponent(modalService, todoService);
  });

  it('should have todos', () => {

    const mockToDoEntries: ToDoEntry[] = [
      { title: 'Task 1', done: false, date: new Date(), priority: Priority.Low },
      { title: 'Task 2', done: false, date: new Date(), priority: Priority.Normal },
      { title: 'Task 3', done: false, date: new Date(), priority: Priority.High }
    ];
    component.list = mockToDoEntries;

    expect(component.list.length).toBe(mockToDoEntries.length);
  });

  it('should add a category when addCategoryClicked is called', async () => {
    const mockIndex = 0;
    const mockModalRef: Partial<NgbModalRef> = {
      close: jasmine.createSpy('close'),
      dismiss: jasmine.createSpy('dismiss'),
      componentInstance: {},
      result: Promise.resolve('Category'),
    };

    (modalService.open as jasmine.Spy).and.returnValue(mockModalRef);

    await component.addKategorieClicked(mockIndex);

    expect(modalService.open).toHaveBeenCalledWith(KategorieComponent);
    expect(todoService.addBezeichnung).toHaveBeenCalledWith('Category', mockIndex);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

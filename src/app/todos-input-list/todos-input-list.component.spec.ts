import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosInputListComponent } from './todos-input-list.component';

describe('TodosInputListComponent', () => {
  let component: TodosInputListComponent;
  let fixture: ComponentFixture<TodosInputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosInputListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCategoryDefaultComponent } from './task-category-default.component';

describe('TaskCategoryDefaultComponent', () => {
  let component: TaskCategoryDefaultComponent;
  let fixture: ComponentFixture<TaskCategoryDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCategoryDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCategoryDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

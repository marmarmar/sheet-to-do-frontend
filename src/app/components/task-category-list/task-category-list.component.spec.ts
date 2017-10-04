import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCategoryListComponent } from './task-category-list.component';

describe('TaskCategoryListComponent', () => {
  let component: TaskCategoryListComponent;
  let fixture: ComponentFixture<TaskCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

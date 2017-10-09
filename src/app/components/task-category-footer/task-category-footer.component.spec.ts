import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCategoryFooterComponent } from './task-category-footer.component';

describe('TaskCategoryFooterComponent', () => {
  let component: TaskCategoryFooterComponent;
  let fixture: ComponentFixture<TaskCategoryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCategoryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCategoryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

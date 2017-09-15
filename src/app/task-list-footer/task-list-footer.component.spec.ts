/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskListFooterComponent } from './task-list-footer.component';
import { Task } from '../task';

describe('TaskListFooterComponent', () => {
  let component: TaskListFooterComponent;
  let fixture: ComponentFixture<TaskListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListFooterComponent);
    component = fixture.componentInstance;
    component.tasks = [
      new Task({ Id: 1, Title: 'Test', Done: false })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
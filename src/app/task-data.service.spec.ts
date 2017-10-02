import { TestBed, inject } from '@angular/core/testing';
import { Task } from './models/task';
import { TaskDataService } from './task-data.service';
import { ApiService } from "./api.service";
import { ApiMockService } from "./api-mock.service";
describe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskDataService,
        {
        provide: ApiService,
        useClass: ApiMockService
        }]
    });
  });


  it('should be created', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));
});

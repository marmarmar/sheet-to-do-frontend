import { TestBed, inject } from '@angular/core/testing';

import { CurrentTaskCategoryService } from './actual-task-category.service';

describe('CurrentTaskCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentTaskCategoryService]
    });
  });

  it('should be created', inject([CurrentTaskCategoryService], (service: CurrentTaskCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

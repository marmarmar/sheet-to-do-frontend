import { TestBed, inject } from '@angular/core/testing';

import { ActualTaskCategoryService } from './actual-task-category.service';

describe('ActualTaskCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActualTaskCategoryService]
    });
  });

  it('should be created', inject([ActualTaskCategoryService], (service: ActualTaskCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

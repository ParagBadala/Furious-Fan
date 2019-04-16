import { TestBed, async, inject } from '@angular/core/testing';

import { MovieEditGuard } from './movie-edit.guard';

describe('MovieEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieEditGuard]
    });
  });

  it('should ...', inject([MovieEditGuard], (guard: MovieEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});

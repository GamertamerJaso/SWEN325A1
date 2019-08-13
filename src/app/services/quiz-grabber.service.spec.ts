import { TestBed } from '@angular/core/testing';

import { QuizGrabberService } from './quiz-grabber.service';

describe('QuizGrabberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizGrabberService = TestBed.get(QuizGrabberService);
    expect(service).toBeTruthy();
  });
});

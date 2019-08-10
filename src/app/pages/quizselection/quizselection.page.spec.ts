import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizselectionPage } from './quizselection.page';

describe('QuizselectionPage', () => {
  let component: QuizselectionPage;
  let fixture: ComponentFixture<QuizselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

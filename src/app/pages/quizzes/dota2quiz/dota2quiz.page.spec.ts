import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dota2quizPage } from './dota2quiz.page';

describe('Dota2quizPage', () => {
  let component: Dota2quizPage;
  let fixture: ComponentFixture<Dota2quizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dota2quizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2quizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

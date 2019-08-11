import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz1Page } from './quiz1.page';

describe('Quiz1Page', () => {
  let component: Quiz1Page;
  let fixture: ComponentFixture<Quiz1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quiz1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

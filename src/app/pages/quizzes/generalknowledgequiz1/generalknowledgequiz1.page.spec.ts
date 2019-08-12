import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Generalknowledgequiz1Page } from './generalknowledgequiz1.page';

describe('Generalknowledgequiz1Page', () => {
  let component: Generalknowledgequiz1Page;
  let fixture: ComponentFixture<Generalknowledgequiz1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Generalknowledgequiz1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Generalknowledgequiz1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

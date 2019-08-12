import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoretocomePage } from './moretocome.page';

describe('MoretocomePage', () => {
  let component: MoretocomePage;
  let fixture: ComponentFixture<MoretocomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoretocomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoretocomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

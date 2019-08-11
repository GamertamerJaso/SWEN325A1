import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizselectionPage } from './quizselection';

describe('QuizselectionPage', () => {
  let component: QuizselectionPage;
  let fixture: ComponentFixture<QuizselectionPage>;
  let quizselectionPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizselectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a quizselection of 10 elements', () => {
    quizselectionPage = fixture.nativeElement;
    const items = quizselectionPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});

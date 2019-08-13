import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { QuizGrabberService } from 'src/app/services/quiz-grabber.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  firstName=[];
  lastName=[];
  email=[];

  constructor(private firebaseService: FirebaseService, private quizService: QuizGrabberService) {}

  ngOnInit(): void {
    this.firebaseService.getCurrentUser();
    this.firstName = this.firebaseService.firstName;
    this.lastName = this.firebaseService.lastName;
    this.email = this.firebaseService.email;
  }
  
  getQuiz(name: string, questionNum: number): void {
    let newName = name;
    this.quizService.setCurrentQuiz(newName, questionNum);
  }
}

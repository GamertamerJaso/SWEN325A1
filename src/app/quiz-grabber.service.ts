import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class QuizGrabberService {
  quiz;
  answers = [];
  order = [];
  question: String;

  currentQuiz: string;

  constructor(private firebase: FirebaseService) {}

  getQuiz(): void {
    console.log('getting quiz: ' + this.currentQuiz);
    let path = 'quizzes/' + this.currentQuiz;

    this.quiz = this.firebase.getDatabase(path);
    this.quiz.get().then(snapshot => {
      this.question = snapshot.data().Question;
      this.answers.push(snapshot.data().Answer);
      this.answers.push(snapshot.data().A1);
      this.answers.push(snapshot.data().A2);
      this.answers.push(snapshot.data().A3);
    });
    console.log(this.question);
    var arr = [];
    while (arr.length < 4) {
      var r = Math.floor(Math.random() * 4);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    for (let i = 0; i < 4; i++) {
      // this.items.push({
      //   order: this.icons[Math.floor(Math.random() * this.icons.length)]
      // });
      this.order.push(arr[i]);
    }
  }

  setCurrentQuiz(name: string) {
    console.log('setting current quiz to: ' + name);
    this.currentQuiz = name;
    this.quiz = null;
    this.answers = [];
    this.order = [];
    this.question = null;
  }
}

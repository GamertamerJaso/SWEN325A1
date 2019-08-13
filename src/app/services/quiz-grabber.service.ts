import { Injectable } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class QuizGrabberService {
  quiz;
  answers = [];
  order = [];
  question=[];
  questionNum;
  currentQuiz: string;
  currentQuestion: number;

  constructor(private firebase: FirebaseService) {}

  getQuiz() {
    let path = 'quizzes/' + this.currentQuiz +'/Q'+ this.questionNum;

    this.quiz = this.firebase.getDatabase(path);
    this.quiz.get().then(snapshot => {
      this.answers.push(snapshot.data().Answer);
      this.answers.push(snapshot.data().A1);
      this.answers.push(snapshot.data().A2);
      this.answers.push(snapshot.data().A3);
      this.question.push(snapshot.data().Question);
    });
    var arr = [];
    while (arr.length < 4) {
      var r = Math.floor(Math.random() * 4);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    for (let i = 0; i < 4; i++) {
      this.order.push(arr[i]);
    }
  }

  setCurrentQuiz(name: string, questionNum: number) {
    this.quiz = null;
    this.answers = [];
    this.order = [];
    this.question = [];
    this.currentQuiz = name;
    this.questionNum = questionNum;
  }

  setQuestionNum(i: number){
    this.questionNum=i;//this.questionNum+1;
    this.quiz = null;
    this.answers = [];
    this.order = [];
    this.question = [];
  }

  uploadScoreToLeaderboard(score: number){
      window.location.href='/leaderboard';
      console.log(this.currentQuiz+' '+score);
  }
}

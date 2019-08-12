import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
import { QuizGrabberService } from 'src/app/quiz-grabber.service';

@Component({
  selector: 'app-dota2quiz',
  templateUrl: './dota2quiz.page.html',
  styleUrls: ['./dota2quiz.page.scss']
})
export class Dota2quizPage implements OnInit {
  constructor(private firebase: FirebaseService, private quizService: QuizGrabberService) {}
  quiz;
  answers = [];
  order = [];
  question;
  // answers = {
  //   answer: String,
  //   a1: String,
  //   a2: String,
  //   a3: String
  // };

  ngOnInit(): void {
    this.quizService.getQuiz();
    this.quiz = this.quizService.quiz;
    this.answers = this.quizService.answers;
    this.order = this.quizService.order;
    this.question = this.quizService.question;
    // this.data = this.quiz
    //   .get()
    //   .then(function(doc) {
    //     if (doc.exists) {
    //       console.log('Document data:', doc.data());
    //       console.log(doc.data().A1);
    //       return doc.data();
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log('No such document!');
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log('Error getting document:', error);
    //   });
    // Object.entries(this.data).forEach(element => {
    //   console.log(element);
    // });
  }
}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { QuizGrabberService } from 'src/app/services/quiz-grabber.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss']
})
export class QuizPage implements OnInit {
  constructor(private firebase: FirebaseService, private quizService: QuizGrabberService) {}
  quiz;
  answers = [];
  order = [];
  question = [];
  score=0;
  i=1;
  isChecked=false;
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
    this.isChecked=false;
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

  setQuestionNum(value: number){
    if(this.answers[0]==this.answers[this.order[value]]){
        this.score=this.score+1;
        console.log(this.answers[this.order[value]]);
        console.log(this.answers[0]);
        console.log(this.score);
    }
    if(this.i<3){
      this.i++;
      this.quizService.setQuestionNum(this.i);
      this.quizService.getQuiz();
      this.quiz = this.quizService.quiz;
      this.answers = this.quizService.answers;
      this.order = this.quizService.order;
      this.question = this.quizService.question;
    }
    else{
      this.quizService.uploadScoreToLeaderboard(this.score);
    }
  }
}

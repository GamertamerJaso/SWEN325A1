import { Component, OnInit } from '@angular/core';
import { QuizGrabberService } from 'src/app/services/quiz-grabber.service';

@Component({
  selector: 'app-quizselection',
  templateUrl: 'quizselection.page.html',
  styleUrls: ['quizselection.page.scss']
})
export class QuizselectionPage implements OnInit {
  private selectedItem: any;
  private quiznames = [
    'Dota 2 Quiz',
    'Dota 2 basics to test your skill',
    'dota2quiz',
    'General Knowledge Quiz 1',
    'Make your next pub quiz a success',
    'generalknowledgequiz1',
    'Math Quiz 1',
    'Sharpen up your math skills',
    'mathquiz1',
    'Vocab Quiz 1',
    'Constantly confuzzled? Up your vocab',
    'vocabquiz1',
    'Java Basics Quiz',
    'Keep your java skill up to date',
    'javabasicsquiz',
    'Dark Souls Quiz',
    'Up your lore knowledge',
    'darksoulsquiz',
    'Fallout Quiz',
    'Update your knowledge of the wasteland',
    'falloutquiz',
    'Geography Quiz',
    'Been to Bali once? This is your quiz',
    'geographyquiz',
    'Movie Quiz 1',
    'Are you really a film buff? Lets find out',
    'moviequiz1',
    'Music Quiz 1',
    'Hows your music knowledge?',
    'musicquiz1'
  ];
  public items: Array<{ title: string; note: string; link: string}> = [];
  constructor(private quizService: QuizGrabberService) {
    for (let i = 0; i < 30; i = i + 3) {
      this.items.push({
        title: this.quiznames[i],
        note: this.quiznames[i + 1],
        link: this.quiznames[i + 2]
      });
    }
  }

  ngOnInit() {}

  getQuiz(name: string, questionNum: number): void {
    let newName = name;
    this.quizService.setCurrentQuiz(newName, questionNum);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/quizselection', JSON.stringify(item)]);
  // }
}

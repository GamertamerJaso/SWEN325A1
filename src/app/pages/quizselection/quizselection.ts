import { Component, OnInit } from '@angular/core';
import { QuizGrabberService } from 'src/app/services/quiz-grabber.service';

@Component({
  selector: 'app-quizselection',
  templateUrl: 'quizselection.page.html',
  styleUrls: ['quizselection.page.scss']
})
export class QuizselectionPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  private quiznames = [
    'Dota 2 Quiz',
    'Dota 2 basics to test your skill',
    'dota2quiz',
    'General Knowledge Quiz 1',
    'The first general knowledge quiz to make your next pub quiz a success',
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
    'Be the envy of your friends with your lore knowledge',
    'darksoulsquiz',
    'Fallout Quiz',
    'The Brotherhood of Steel want you to update your knowledge of the wasteland',
    'falloutquiz',
    'Geography Quiz',
    'For the novice traveller whos been to Bali once',
    'geographyquiz',
    'Movie Quiz 1',
    'Are you really a film buff? Lets find out',
    'moviequiz1',
    'Music Quiz 1',
    'Are you worthy of the Grammys of music knowledge',
    'musicquiz1'
  ];
  public items: Array<{ title: string; note: string; link: string; icon: string }> = [];
  constructor(private quizService: QuizGrabberService) {
    for (let i = 0; i < 30; i = i + 3) {
      this.items.push({
        title: this.quiznames[i],
        note: this.quiznames[i + 1],
        link: this.quiznames[i + 2],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
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

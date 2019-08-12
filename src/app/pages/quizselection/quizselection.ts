import { Component, OnInit } from '@angular/core';

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
    'Dota 2 Quiz', 'Dota 2 basics to test your skill','dota2quiz',
    'General Knowledge Quiz 1','The first general knowledge quiz to make your next pub quiz a success','generalknowledgequiz1',
    'Math Quiz 1','Sharpen up your math skills','generalknowledgequiz1',
    'Vocab Quiz 1','Constantly confuzzled? Up your vocab','generalknowledgequiz1',
    'Java Basics Quiz','Keep your java skill up to date','generalknowledgequiz1',
    'Dark Souls Quiz','Be the envy of your friends with your lore knowledge','generalknowledgequiz1',
    'Fallout Quiz','The Brotherhood of Steel want you to update your knowledge of the wasteland','generalknowledgequiz1',
    'Geography Quiz','For the novice traveller whos been to Bali once','generalknowledgequiz1',
    'Movie Quiz 1','Are you really a film buff? Lets find out','generalknowledgequiz1',
    'More to come','','moretocome'
  ]
  public items: Array<{ title: string; note: string; link: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < 30; i=i+3) {
      this.items.push({
        title: this.quiznames[i], 
        note: this.quiznames[i+1],
        link: this.quiznames[i+2],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/quizselection', JSON.stringify(item)]);
  // }
}

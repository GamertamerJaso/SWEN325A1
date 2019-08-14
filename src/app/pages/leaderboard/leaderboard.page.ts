import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  l1;
  l2;
  l3;
  l4; 

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.getLeaderboard();
    this.l1 = this.firebase.l1;
    this.l2 = this.firebase.l2;
    this.l3 = this.firebase.l3;
    this.l4 = this.firebase.l4;
  }

}

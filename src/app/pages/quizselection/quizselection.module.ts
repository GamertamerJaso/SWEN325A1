import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { QuizselectionPage } from './quizselection';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuizselectionPage
      }
    ])
  ],
  declarations: [QuizselectionPage]
})
export class QuizselectionPageModule {}

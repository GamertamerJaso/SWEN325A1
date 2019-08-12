import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { Dota2quizPage } from './dota2quiz.page';

const routes: Routes = [
  {
    path: '',
    component: Dota2quizPage
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [Dota2quizPage]
})
export class Dota2quizPageModule  {

}

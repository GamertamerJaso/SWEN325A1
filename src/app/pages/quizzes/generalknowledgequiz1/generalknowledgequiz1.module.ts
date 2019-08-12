import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Generalknowledgequiz1Page } from './generalknowledgequiz1.page';

const routes: Routes = [
  {
    path: '',
    component: Generalknowledgequiz1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Generalknowledgequiz1Page]
})
export class Generalknowledgequiz1PageModule {}

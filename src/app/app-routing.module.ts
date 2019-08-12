import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'quizselection',loadChildren: () => import('./pages/quizselection/Quizselection.module').then(m => m.QuizselectionPageModule) },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'passwordreset',loadChildren: './pages/passwordreset/passwordreset.module#PasswordresetPageModule' },
  { path: 'leaderboard', loadChildren: './pages/leaderboard/leaderboard.module#LeaderboardPageModule' },
  { path: 'dota2quiz', loadChildren: './pages/quizzes/dota2quiz/dota2quiz.module#Dota2quizPageModule' },
  { path: 'generalknowledgequiz1', loadChildren: './pages/quizzes/generalknowledgequiz1/generalknowledgequiz1.module#Generalknowledgequiz1PageModule' },
  { path: 'moretocome', loadChildren: './pages/quizzes/moretocome/moretocome.module#MoretocomePageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

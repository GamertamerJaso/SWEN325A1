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
  { path: 'moretocome', loadChildren: './pages/moretocome/moretocome.module#MoretocomePageModule' },
  { path: 'quiz', loadChildren: './pages/quiz/quiz.module#QuizPageModule' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

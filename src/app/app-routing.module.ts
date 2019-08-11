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
  { path: 'quiz1', loadChildren: './pages/quiz1/quiz1.module#Quiz1PageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

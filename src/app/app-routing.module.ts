import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginComponent } from './login/login.component'
import { SettingsComponent } from './settings/settings.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'home', redirectTo: 'https://renukaseepersad.github.io/Temp_stackUnderflow/index.html'},
  {path: 'settings', component: SettingsComponent},
  {path: 'survey', component: SurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

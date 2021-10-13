import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
{ path: 'title', component: TitleComponent },
{ path: 'question', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
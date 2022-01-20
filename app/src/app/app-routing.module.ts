import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
{ path: '', component: TitleComponent},
{ path: 'title', component: TitleComponent },
{ path: 'question', component: QuestionComponent },
{ path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      // 現在のURLに遷移する場合もreloadするよう設定
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

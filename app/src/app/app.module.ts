import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

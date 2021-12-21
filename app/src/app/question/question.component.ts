import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Quiz, Choice, QUIZ_DATA, } from 'src/app/const/quiz';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  quiz?: Quiz;
  quizList?: any;
  quizCount: number = 0;
  trueAnswerCount: number = 0;
  isDisplayHint: boolean = false;

  // サービスを使えるようにする
  constructor(
    private quizService: QuizService,
    private router: Router
  ) {
    // 同一ルートへ遷移する場合shouldReuseRouteにはtrueが入るため強制的にfalse設定する
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  //
  ngOnInit(): void {
    this.quizCount = this.quizService.quizCount;
    this.quiz = this.quizService.getQuiz();
    this.quiz.choices = _.shuffle(this.quiz.choices);
    console.log(this.quiz.choices);
  }

  // 問題のヒントが表示する。
  clickHint(): void {
    this.isDisplayHint = !this.isDisplayHint;
  }

  // quizServiceから関数を呼び出す

  selectAnswer(choice: Choice){
    this.quizService.checkAnswer(choice);
    this.quizCount = this.quizService.nextQuizCount();
    // 問題画面から結果画面に遷移
    if(this.quizCount < this.quizService.quizList.length){
      this.router.navigate(['question']);
    }else{
      this.router.navigate(['result']);
    }
  }
}

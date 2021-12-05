import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Quiz, Choice, QUIZ_DATA} from 'src/app/const/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  quiz?: Quiz;
  quizList?: any;
  quizCount: number = 0;

  isDisplayHint: boolean = false;

  // サービスを使えるようにする
  constructor(
    private quizService: QuizService
  ) {}

  //
  ngOnInit(): void {
    this.quizCount = this.quizService.quizCount;
    this.quiz = this.quizService.getQuiz();
  }

  // 問題のヒントが表示する。
  clickHint(): void {
    this.isDisplayHint = !this.isDisplayHint;
  }

  // quizServiceから関数を呼び出す
  selectAnswer(choice: Choice) {
    this.quiz = this.quizService.nextQuiz();
    this.quizCount = this.quizService.nextQuizCount();
    this.quizService.resultMove();
  }
}

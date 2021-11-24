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

  // ヒントを表示するかどうか
  isDisplayHint: boolean = false;

  quiz?: Quiz;
  quizList?: any;
  quizCount?: number;

//  サービスを使えるようにする
  constructor(private quizservice:QuizService) {}

  ngOnInit(): void {}

  // 問題のヒントが表示する。
  clickHint():void{
    this.isDisplayHint = !this.isDisplayHint;
  }
}

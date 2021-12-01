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
  quizCount?: number;

  isDisplayHint: boolean = false;

  //  サービスを使えるようにする
  constructor(private quizservice:QuizService) {}

  ngOnInit(): void {
    this.quizCount = this.quizservice.quizCount;
    this.quiz = this.quizservice.getQuiz();
  }
    // 問題のヒントが表示する。
  clickHint():void{
    this.isDisplayHint = !this.isDisplayHint;
  }
  //
  choiceAnswer(choice: Choice){
    this.quiz = this.quizservice.nextQuiz();
    this.quizCount = this.quizservice.nextQuizCount();
  }

}

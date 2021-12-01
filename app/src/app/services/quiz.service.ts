import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Choice,QUIZ_DATA,Quiz } from '../const/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // クイズが入る配列
  quizList:any;
  // クイズをカウントする変数
  quizCount:number = 0;

  constructor(private router:Router) { }

  initQuiz(){}

  // クイズを開始
  startQuiz(){
    this.quizList = QUIZ_DATA;
    this.quizCount = 1;
    this.router.navigate(['question'])
  }
  // クイズを一つ返す
  getQuiz(){
    return this.quizList[this.quizCount -1];
  }
  // 次のクイズに移る
  nextQuiz(){
    return this.quizList[++this.quizCount];
  }
  nextQuizCount(){
    return this.quizCount;
  }
}



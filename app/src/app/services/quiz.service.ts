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

  // クイズを開始
  startQuiz(){
    this.quizList = QUIZ_DATA;
    this.quizCount = 0;
    this.router.navigate(['question'])
  }

  // クイズを一つ返す
  getQuiz() {
    return this.quizList[this.quizCount];
  }

  // 次のクイズに移る
  nextQuiz() {
    ++this.quizCount;
    return this.quizList[this.quizCount];
  }

  // 問題のカウントを進める
  nextQuizCount() {
    return this.quizCount;
  }

  // 問題画面から結果画面に遷移
  resultMove() {
    if(this.quizCount < this.quizList.length){
      this.router.navigate(['question']);
    }else{
      this.router.navigate(['result']);
    }
  }
}



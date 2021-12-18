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
  // 正解した問題をカウントする
  trueAnswerCount: number = 0;

  constructor(private router:Router) { }

  // クイズを開始
  startQuiz(){
    this.quizList = QUIZ_DATA;
    this.quizCount = 0;
    this.trueAnswerCount = 0;
  }

  // クイズを一つ返す
  getQuiz(): Quiz {
    return this.quizList[this.quizCount];
  }

  // 次のクイズに移る
  nextQuiz(): Quiz {
    ++this.quizCount;
    return this.quizList[this.quizCount];
  }

  // 問題のカウントを進める
  nextQuizCount() {
    return this.quizCount;
  }

  // 選んだ選択肢がtrueならtrueAnswerCountを+1する
  checkAnswer(choice: Choice){
    ++this.quizCount;
    if(choice.isAnswer){
      ++this.trueAnswerCount;
    }
  }
}



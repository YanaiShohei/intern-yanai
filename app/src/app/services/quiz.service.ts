import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Choice,QUIZ_DATA,Quiz } from '../const/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // クイズが入る配列
  quizList: any;
  // クイズをカウントする変数
  quizCount:number = 0;
  // 正解した問題をカウントする
  trueAnswerCount: number = 0;
  // ジャンル別に正解数をカウントする
  correctAnswerCountCategory = {
    Category1: 0,
    Category2: 0,
    Category3: 0,
    Category4: 0,
    Category5: 0,
  }

  constructor(private router:Router) { }

  // クイズを開始
  startQuiz(){
    this.quizList = QUIZ_DATA;
    this.quizCount = 0;
    // 正解数を初期化
    this.trueAnswerCount = 0;
    // ジャンル別の正解数を初期化
    this.correctAnswerCountCategory.Category1 = 0;
    this.correctAnswerCountCategory.Category2 = 0;
    this.correctAnswerCountCategory.Category3 = 0;
    this.correctAnswerCountCategory.Category4 = 0;
    this.correctAnswerCountCategory.Category5 = 0;
  }

  // クイズを一つ返す
  getQuiz(): Quiz {
    return this.quizList[this.quizCount];
  }

  // 次のクイズに移る
  nextQuiz(): Quiz {
    return this.quizList[this.quizCount];
  }

  // 問題のカウントを進める
  nextQuizCount() {
    ++this.quizCount;
    return this.quizCount;
  }

  // 正解した問題をカウントする
  // 選んだ選択肢がtrueならtrueAnswerCountを+1する
  checkAnswer(choice: Choice){
    if(choice.isAnswer){
      ++this.trueAnswerCount;
      // カテゴリー別の正解数をカウント
      // カテゴリーが１の場合
      if(this.quizList[this.quizCount].category == 'カテゴリー1'){
        ++this.correctAnswerCountCategory.Category1
      }
      // カテゴリーが２の場合
      if(this.quizList[this.quizCount].category == 'カテゴリー2'){
        ++this.correctAnswerCountCategory.Category2
      }
      // カテゴリー３の場合
      if(this.quizList[this.quizCount].category == 'カテゴリー3'){
        ++this.correctAnswerCountCategory.Category3
      }
      // カテゴリー４の場合
      if(this.quizList[this.quizCount].category == 'カテゴリー4'){
        ++this.correctAnswerCountCategory.Category4
      }
      // カテゴリー５の場合
      if(this.quizList[this.quizCount].category == 'カテゴリー5'){
        ++this.correctAnswerCountCategory.Category5
      }
    }
  }
}



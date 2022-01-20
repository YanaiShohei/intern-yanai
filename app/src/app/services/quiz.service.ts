import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Choice,QUIZ_DATA,Quiz } from '../const/quiz';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  // クイズが入る配列
  quizList: Quiz[] = [];
  // クイズをカウントする変数
  quizCount:number = 0;
  // 正解した問題をカウントする
  trueAnswerCount: number = 0;
  // ジャンル別に正解数をカウントする
  correctCategoryCount: { [key: string]: number } = {
    gen1980: 0,
    gen1990: 0,
    gen2000: 0,
    gen2010: 0,
    gen2020: 0,
  }

  constructor(private router:Router) { }

  // クイズを開始
  startQuiz(){
    this.quizList = QUIZ_DATA;
    this.quizCount = 0;
    // 正解数を初期化
    this.trueAnswerCount = 0;
    // ジャンル別の正解数を初期化
    this.correctCategoryCount.gen1980 = 0;
    this.correctCategoryCount.gen1990 = 0;
    this.correctCategoryCount.gen2000 = 0;
    this.correctCategoryCount.gen2010 = 0;
    this.correctCategoryCount.gen2020 = 0;
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
      // this.quizList[this.quizCount].category ->カテゴリがストリングで入ってる
      // ++this.correctCategoryCount['カテゴリ'] ->かっこの中にカテゴリをストリングで突っ込むと任意のカテゴリのカウントにアクセスできる。
      // if(this.correctCategoryCount.hasOwnProperty(this.quizList[this.quizCount].category)){
      //   this.correctCategoryCount[this.quizList[this.quizCount].category]
      // }
      if(this.quizList[this.quizCount].category){
        ++this.correctCategoryCount[this.quizList[this.quizCount].category]
      }
    }
  }
}



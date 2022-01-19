import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import * as _ from 'lodash-es';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent{

  appName = '音楽診断';

  rule1 = 'ある曲のフレーズが出てきます。';
  rule2 = 'そのフレーズを見て、４つの選択肢の中から正しい曲名を答えてください。';
  rule3 = '答えがわからない場合、ヒントボタンを押すとヒントが表示されます。';
  rule4 = '問題は全部で２５問です。全問回答後に結果が表示されます。';

  // サービスを使えるようにする
  constructor(private quizService: QuizService, private router: Router,) {}

  questionStart(): void {
    // this.router.navigate(['question'])
    // クイズを開始するメソッドを呼び出す
    this.quizService.startQuiz();
    this.router.navigate(['question'])
    this.quizService.quizList = _.shuffle(this.quizService.quizList);
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  appname = '音楽診断';

  rule1 = 'ある歌詞のフレーズが出てきます。';
  rule2 = 'そのフレーズを見て、曲名を答えてください。';
  rule3 = '答えがわからない場合、ヒントを見れます。';
  rule4 = '全問回答後に結果が表示されます。';

  constructor() { }

  ngOnInit(): void {
  }

}

//Choiceというinterface
export interface Choice {
  //statementというstring型の変数 選択肢を格納
  statement: string;
  //isAnswerというboolean型の変数 選択肢がtrueかfalseかを格納
  isAnswer: boolean;
}

//Quizというinterface
export interface Quiz {
  //questionというstring型の変数 問題文を格納
  question: string;
  //choicesというChoice型の配列 statementを格納
  choices: Choice[]
  //explanationというstring型の変数 ヒントを格納?
  hint: string;
};

export const QUIZ_DATA: Quiz[] = [
  {
    question: 'いくつもの日々を超えてたどりついた今がある',
    choices: [
      {
        statement: '栄光の架け橋',
        isAnswer: true
      },
      {
        statement: 'この国に生まれてよかった。',
        isAnswer: false
      },
      {
        statement: 'How Can I Forget',
        isAnswer: false
      },
      {
        statement: '虹',
        isAnswer: false
      },
    ],
    hint: 'ゆずの楽曲。アテネオリンピック公式テーマソング'
  },
  {
    question: '２人よりそって歩いて永久の愛を形にしていつまでも君の横で笑っていたくて',
    choices: [
      {
        statement: 'アカリ',
        isAnswer: false
      },
      {
        statement: '愛し君へ',
        isAnswer: false
      },
      {
        statement: 'キセキ',
        isAnswer: true
      },
      {
        statement: '愛唄',
        isAnswer: false
      },
    ],
    hint: 'GReeeeNの楽曲。高校野球を題材にしたTBS系ドラマ「ROOKIES」の主題歌'
  },
  {
    question: '見えないものを見ようとして、望遠鏡を覗き込んだ静寂を切り裂いていくつもの声が生まれたよ',
    choices: [
      {
        statement: '星',
        isAnswer: false
      },
      {
        statement: '天体観測',
        isAnswer: true
      },
      {
        statement: 'TSUNAMI',
        isAnswer: false
      },
      {
        statement: '純愛歌',
        isAnswer: false
      },
    ],
    hint: 'BUMP OF CHICKENの楽曲。関西テレビ・フジテレビ系ドラマ「天体観測」挿入歌。'
  },
  {
    question: '広い宇宙の数あるひとつ青い地球の広い世界で小さな恋の思いは届く',
    choices: [
      {
        statement: '小さな恋のうた',
        isAnswer: true
      },
      {
        statement: '青いベンチ',
        isAnswer: false
      },
      {
        statement: 'LIFE',
        isAnswer: false
      },
      {
        statement: 'かくれんぼ',
        isAnswer: false
      },
    ],
    hint: 'MONGOL800の代表曲。これまでにシングル化されたことはないが、さまざまなアーティストにカバーされている。'
  },
  {
    question: '描いた夢とここにある今２つの景色見比べても',
    choices: [
      {
        statement: '心絵',
        isAnswer: true
      },
      {
        statement: '大切なもの',
        isAnswer: false
      },
      {
        statement: 'Discord',
        isAnswer: false
      },
      {
        statement: 'アンコール',
        isAnswer: false
      },
    ],
    hint: 'ロードオブメジャーの楽曲。NHK教育アニメ「メジャー〜１stシーズン〜」のオープニングテーマ'
  },
];

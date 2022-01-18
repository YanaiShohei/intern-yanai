//Choiceというinterface
export interface Choice {
  //statementというstring型の変数 選択肢を格納
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
  // １
  {
    question: '待つわ いつまでも 待つわ 他の誰かに あなたが ふられる日まで',
    choices: [
      {
        statement: '待つわ',
        isAnswer: true
      },
      {
        statement: 'あなただけ',
        isAnswer: false
      },
      {
        statement: '未知標',
        isAnswer: false
      },
      {
        statement: 'あなたへ',
        isAnswer: false
      },
    ],
    hint: 'あみんの楽曲。岡村孝子・加藤晴子のデュオ、2019年、NTTドコモの「dポイントクラブ」のCMソングに起用されている',
    category: 'gen1980'
  },
  // ２
  {
    question: 'もし 俺がヒーローだったら 悲しみを近づけやしないのに…',
    choices: [
      {
        statement: '翼の折れたエンジェル',
        isAnswer: true
      },
      {
        statement: '君だけのヒーロー',
        isAnswer: false
      },
      {
        statement: 'Be True',
        isAnswer: false
      },
      {
        statement: '100粒の涙',
        isAnswer: false
      },
    ],
    hint: '中村あゆみの楽曲。３枚目のシングル、1985年「日清 カップヌードル」CMソング。',
    category: 'gen1980'
  },
  // ３
  {
    question: '走る 走る 俺たち  流れる汗も そのままに',
    choices: [
      {
        statement: 'Runner',
        isAnswer: true
      },
      {
        statement: '旅人よ',
        isAnswer: false
      },
      {
        statement: '月光',
        isAnswer: false
      },
      {
        statement: 'もう無理だ',
        isAnswer: false
      },
    ],
    hint: '爆風スランプを代表する一曲で、『第39回NHK紅白歌合戦』でも歌われた。',
    category: 'gen1980'
  },
  // ４
  {
    question: 'あー 果てしない 夢を追い続け あー いつの日か 大空かけめぐる	',
    choices: [
      {
        statement: '大都会',
        isAnswer: true
      },
      {
        statement: '明日への旅立ち',
        isAnswer: false
      },
      {
        statement: 'PASSION-LADY',
        isAnswer: false
      },
      {
        statement: 'メモリー',
        isAnswer: false
      },
    ],
    hint: 'この曲のタイトルは東名阪を連想されることもあるが、（この曲の作詞者でもある）田中昌之によれば、博多を歌った曲である。また、当時放送されていた刑事ドラマ『大都会』からもヒントを得たという。',
    category: 'gen1980'
  },
  // ５
  {
    question: '鏡の中のマリオネット もつれた糸を断ち切って',
    choices: [
      {
        statement: 'MARIONETTE',
        isAnswer: true
      },
      {
        statement: 'ワイルド・ワン',
        isAnswer: false
      },
      {
        statement: 'フルアヘッド',
        isAnswer: false
      },
      {
        statement: 'アカツキ',
        isAnswer: false
      },
    ],
    hint: '日本のロックバンドであるBOØWYの6枚目のシングル。BOØWYとしては最も売り上げの高いシングルとなった。',
    category: 'gen1980'
  },
  // 6
  {
    question: 'いつだってわすれない エジソンはえらい人 そんなの常識',
    choices: [
      {
        statement: 'おどるポンポコリン',
        isAnswer: true
      },
      {
        statement: 'ゆめいっぱい',
        isAnswer: false
      },
      {
        statement: 'びまる子音頭',
        isAnswer: false
      },
      {
        statement: 'うれしい! たのしい! 大好き!',
        isAnswer: false
      },
    ],
    hint: 'フジテレビ系テレビアニメ『ちびまる子ちゃん』第1期作の初代エンディングテーマ曲。',
    category: 'gen1990'
  },
  // 7
  {
    question: '「愛してる」の響きだけで 強くなれる気がしたよ',
    choices: [
      {
        statement: 'チェリー',
        isAnswer: true
      },
      {
        statement: 'バニーガール',
        isAnswer: false
      },
      {
        statement: '空も飛べるはず',
        isAnswer: false
      },
      {
        statement: 'ココロの時間',
        isAnswer: false
      },
    ],
    hint: '日本のロックバンド・スピッツの楽曲で、13作目のシングル。2019年から放送されているNTT東日本のテレビCMでこの曲が使われた。サビの歌詞「愛してる」と「ICT」を掛け合わせた「ICT（アイシテ）る？」をキャッチフレーズにしている。',
    category: 'gen1990'
  },
  // 8
  {
    question: '負けない事 投げ出さない事 逃げ出さない事 信じ抜く事',
    choices: [
      {
        statement: 'それが大事',
        isAnswer: true
      },
      {
        statement: 'Autumn Avenueを君と',
        isAnswer: false
      },
      {
        statement: '掃除が大事',
        isAnswer: false
      },
      {
        statement: 'Yes We Can!!',
        isAnswer: false
      },
    ],
    hint: '最初はテレビ朝日系列で放送されていた『スポーツフロンティア』のエンディングテーマとして流され、この時はまだヒットするまでには至らなかったが、フジテレビ系『邦ちゃんのやまだかつてないテレビ』のテーマソングとして使用されるようになった',
    category: 'gen1990'
  },
  // 9
  {
    question: '笑ってるあなたの側では 素直になれるの',
    choices: [
      {
        statement: '長い間',
        isAnswer: true
      },
      {
        statement: '3人の写真',
        isAnswer: false
      },
      {
        statement: '産直',
        isAnswer: false
      },
      {
        statement: 'ayu ready？',
        isAnswer: false
      },
    ],
    hint: 'Kiroroのメジャーデビュー・シングル。1999年春には、第71回選抜高等学校野球大会の入場行進曲としても採用された。',
    category: 'gen1990'
  },
  // 10
  {
    question: '孤独で 君のからっぽの そのグラスを 満たさないで',
    choices: [
      {
        statement: '悲しみは雪のように',
        isAnswer: true
      },
      {
        statement: 'センチメンタルクリスマス',
        isAnswer: false
      },
      {
        statement: '愛という名のもとに',
        isAnswer: false
      },
      {
        statement: 'らいおんハート',
        isAnswer: false
      },
    ],
    hint: '悲しみは雪のように」（かなしみはゆきのように）は、浜田省吾の楽曲。1981年11月21日に14枚目のシングルとして発売され、1992年にフジテレビ系テレビドラマ『愛という名のもとに』の主題歌として起用された。',
    category: 'gen1990'
  },
  // 11
  {
    question: 'いくつもの日々を超えて たどりついた今がある',
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
<<<<<<< Updated upstream
    hint: 'ゆずの楽曲。アテネオリンピック公式テーマソング'
=======
    hint: 'ゆずの楽曲。アテネオリンピック公式テーマソング',
    category: 'gen2000'
>>>>>>> Stashed changes
  },
  // 12
  {
    question: '２人よりそって歩いて 永久の愛を形にして いつまでも君の横で笑っていたくて',
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
<<<<<<< Updated upstream
    hint: 'GReeeeNの楽曲。高校野球を題材にしたTBS系ドラマ「ROOKIES」の主題歌'
=======
    hint: 'GReeeeNの楽曲。高校野球を題材にしたTBS系ドラマ「ROOKIES」の主題歌',
    category: 'gen2000',
>>>>>>> Stashed changes
  },
  // 13
  {
    question: '見えないものを見ようとして 望遠鏡を覗き込んだ 静寂を切り裂いていくつもの声が生まれたよ',
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
  // 14
  {
    question: '広い宇宙の数あるひとつ 青い地球の広い世界で 小さな恋の思いは届く',
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
<<<<<<< Updated upstream
    hint: 'MONGOL800の代表曲。これまでにシングル化されたことはないが、さまざまなアーティストにカバーされている。'
=======
    hint: 'MONGOL800の代表曲。これまでにシングル化されたことはないが、さまざまなアーティストにカバーされている。',
    category: 'gen2000'
>>>>>>> Stashed changes
  },
  // 15
  {
    question: '描いた夢と ここにある今 ２つの景色見比べても',
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
<<<<<<< Updated upstream
    hint: 'ロードオブメジャーの楽曲。NHK教育アニメ「メジャー〜１stシーズン〜」のオープニングテーマ'
=======
    hint: 'ロードオブメジャーの楽曲。NHK教育アニメ「メジャー〜１stシーズン〜」のオープニングテーマ',
    category: 'gen2000'
  },
  // 16
  {
    question: 'あの日見渡した渚を 今も思い出すんだ',
    choices: [
      {
        statement: '打上花火',
        isAnswer: true
      },
      {
        statement: 'Forever Friends',
        isAnswer: false
      },
      {
        statement: 'INTRO',
        isAnswer: false
      },
      {
        statement: '高い壁には幾千のドア',
        isAnswer: false
      },
    ],
    hint: '楽曲は新房昭之監督のアニメ映画『打ち上げ花火、下から見るか? 横から見るか?』の主題歌に起用された。',
    category: 'gen2010'
  },
  // 17
  {
    question: '愛が僕に噛み付いて 離さないと言うけれど',
    choices: [
      {
        statement: 'さよならエレジー',
        isAnswer: true
      },
      {
        statement: '虹',
        isAnswer: false
      },
      {
        statement: 'アンサイズニア',
        isAnswer: false
      },
      {
        statement: 'そばかす',
        isAnswer: false
      },
    ],
    hint: '日本の俳優・歌手の菅田将暉の楽曲。3作目のシングルとして2018年2月21日にエピックレコードジャパンより発売された。',
    category: 'gen2010'
  },
  // 18
  {
    question: 'この度は、私を選んでくれて どうもありがとう',
    choices: [
      {
        statement: 'トリセツ',
        isAnswer: true
      },
      {
        statement: 'A型のうた',
        isAnswer: false
      },
      {
        statement: 'True Love',
        isAnswer: false
      },
      {
        statement: 'おとなの掟',
        isAnswer: false
      },
    ],
    hint: '西野カナの楽曲。映画『ヒロイン失格』の主題歌',
    category: 'gen2010'
  },
  // 19
  {
    question: 'トライ トライ 正しいより楽しい 正しいより面白い',
    choices: [
      {
        statement: 'やってみよう',
        isAnswer: true
      },
      {
        statement: 'ともに',
        isAnswer: false
      },
      {
        statement: 'シグナル',
        isAnswer: false
      },
      {
        statement: 'GONG',
        isAnswer: false
      },
    ],
    hint: 'au三太郎シリーズ「春のトビラ・やってみよう」篇CMソング',
    category: 'gen2010'
  },
  // 20
  {
    question: '空の声が聞きたくて 風の声に耳すませ',
    choices: [
      {
        statement: '海の声',
        isAnswer: true
      },
      {
        statement: '香音',
        isAnswer: false
      },
      {
        statement: 'BEGIN',
        isAnswer: false
      },
      {
        statement: '空の声',
        isAnswer: false
      },
    ],
    hint: 'au三太郎シリーズで桐谷健太演じる浦島太郎（浦ちゃん）がCMの中で歌う『auガラホ「海の声」篇』のために作られたオリジナル楽曲のCMソング',
    category: 'gen2010'
  },
  // 21
  {
    question: '嗚呼いつものように 過ぎる日々にあくびが出る',
    choices: [
      {
        statement: '群青',
        isAnswer: true
      },
      {
        statement: '青い世界',
        isAnswer: false
      },
      {
        statement: 'たぶん',
        isAnswer: false
      },
      {
        statement: 'Yummy',
        isAnswer: false
      },
    ],
    hint: '小説を音楽にするユニット「YOASOBI」として5作目の作品で、『月刊アフタヌーン』で連載中の漫画『ブルーピリオド』（山口つばさ・著）にインスパイアされており、アルフォートのCMストーリーテキスト「青を味方に。」を原作として作詞作曲をした',
    category: 'gen2020'
  },
  // 22
  {
    question: 'どんな言葉で 今あなたに伝えられるだろう',
    choices: [
      {
        statement: 'あなたがいることで',
        isAnswer: true
      },
      {
        statement: 'I LOVE…',
        isAnswer: false
      },
      {
        statement: '花に亡霊',
        isAnswer: false
      },
      {
        statement: '虹',
        isAnswer: false
      },
    ],
    hint: 'TBS系日曜劇場『テセウスの船』として書き下ろされたバラード。Uruの楽曲。',
    category: 'gen2020'
  },
  // 23
  {
    question: '深夜東京の６畳半夢を見てた Ah 灯りの灯らない蛍光灯',
    choices: [
      {
        statement: '春を告げる',
        isAnswer: true
      },
      {
        statement: 'Pretender',
        isAnswer: false
      },
      {
        statement: 'tomo',
        isAnswer: false
      },
      {
        statement: '猫',
        isAnswer: false
      },
    ],
    hint: '2020年12月18日に、YouTubeチャンネル「THE FIRST TAKE」にて同曲の歌唱シーンが公開され、メディア初登場となった',
    category: 'gen2020'
  },
  // 24
  {
    question: 'ちっちゃな頃から優等生 気づいたら大人になっていた',
    choices: [
      {
        statement: 'うっせぇわ',
        isAnswer: true
      },
      {
        statement: '踊',
        isAnswer: false
      },
      {
        statement: 'ギラギラ',
        isAnswer: false
      },
      {
        statement: 'オンライン',
        isAnswer: false
      },
    ],
    hint: '日本の歌手・Adoの楽曲。メジャー1作目の配信限定シングルとして2020年10月23日にリリースされた。作詞作曲はボカロPのsyudouが手掛けている。',
    category: 'gen2020'
  },
  // 25
  {
    question: '北千住駅のプラットフォーム 銀色の改札 思い出話と思い出ふかし',
    choices: [
      {
        statement: 'ハルノヒ',
        isAnswer: true
      },
      {
        statement: '恋をしたから',
        isAnswer: false
      },
      {
        statement: 'プラットフォーム',
        isAnswer: false
      },
      {
        statement: '今夜このまま',
        isAnswer: false
      },
    ],
    hint: 'アニメ映画『クレヨンしんちゃん 新婚旅行ハリケーン 〜失われたひろし〜』の主題歌として書き下ろされた。「あいみょん」の楽曲。',
    category: 'gen2020'
>>>>>>> Stashed changes
  }
];

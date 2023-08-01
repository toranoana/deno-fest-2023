export const timeTableItems = [
  {
    time: "12:00 ~ 12:30",
    title: "開場",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "13:00 ~ 13:10",
    title: "オープニング",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "13:10 ~ 13:35	",
    title: "基調講演： deno ♥️ npm: Bridging the Gap Between Node and Deno",
    description:
      "Deno's arrival reinvented JavaScript runtime with its focus on security and TypeScript support. Yet, the difference in module systems with Node.js has been a challenge, especially with the vast npm packages left untapped for Deno. No more. We've introducing support for Node built-in modules and npm modules in Deno. This talk will detail the journey of implementing npm support, revealing the hurdles, solutions, and the remarkable possibilities it opens. It's our move to reconcile the power of the npm ecosystem with Deno's secure, efficient runtime.",
    speakerName: "Ryan Dahl - ライアン・ダール",
    speakerImage: "/images/guest_01.jpeg",
  },
  {
    time: "13:45 ~ 13:55",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "13:55 ~ 14:20",
    title: "セッション 1：JavaScript Server Runtime History",
    description: "JavaScript Server Runtime の過去と現在と未来について",
    speakerName: "Yosuke Furukawa - 古川 陽介",
    speakerImage: "/images/speaker_01.jpeg",
  },
  {
    time: "14:20 ~ 14:35",
    title: "セッション 2：開発チームに聞こうのコーナー1",
    description: "",
    speakerName: "Deno 開発チーム",
    speakerImage: "/images/img_deno.png",
  },
  {
    time: "14:35 ~ 14:50",
    title: "セッション 3：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "14:50 ~ 15:05",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "15:05 ~ 15:20",
    title: "セッション 4：SupabaseのAI検索機能",
    description:
      "SupabaseにはSupabase ClippyというAI検索機能があります。こちらはユーザーの検索に対してSupabase Edge functionsとOpenAIを駆使してChatGPT風に回答結果をユーザーに返すようになっているものです。最近だとMozillaさん同じ検索機能をサイトに追加しており、今後デファクトになるかもしれないAI検索機能！そんなAI検索機能がどのように実装されているのかをお話しいたします。",
    speakerName: "Tyler - タイラー",
    speakerImage: "/images/speaker_04.png",
  },
  {
    time: "15:20 ~ 15:35",
    title: "セッション 5：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "15:35 ~ 15:50",
    title: "セッション 6：金曜 DENO DE SHOW",
    description:
      "一人の技術者が仕事を進めるために必要だった、ヤクの毛刈りに関するおはなし。非同期処理を抽象的に扱うため、unknown 型の扱いを楽にするため、Worker メッセージを抽象的に扱うため、などなど、開発してきた数多のサードパーティモジュールの開発動機や使い方紹介など。",
    speakerName: "Alisue - ありすえ",
    speakerImage: "/images/speaker_02.png",
  },
  {
    time: "15:50 ~ 16:00",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "16:00 ~ 16:15",
    title: "セッション 7：The power of Web-standards",
    description: `Honoは外部ライブラリに依存せず、WinterCGでディスカッションされている「Web-standard APIs」のみを使ったWebフレームワークです。本トークでは「Web-standard APIs」に焦点をあてつつ以下について話します。
- Hono内で使っているWeb-standard APIs
- HonoのDeno対応
- どのランタイムでも動かす
- スタンダードではないもの
- WinterCG`,
    speakerName: "Yusuke Wada - 和田裕介",
    speakerImage: "/images/speaker_07.jpg",
  },
  {
    time: "16:15 ~ 16:30",
    title: "セッション 8：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "16:30 ~ 16:45",
    title: "セッション 9：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "16:45 ~ 17:00",
    title: "セッション 10：Civic Tech by Open ESM in Pure JavaScript",
    description:
      "36年、100のプログラミング言語を経験して辿り着いたベスト、それが ESM in Pure JavaScript on Deno。シビックテック集団、Code for FUKUIのESモジュールトップ5と共にその魅力をご紹介します。",
    speakerName: "Taisuke Fukuno - 福野泰介",
    speakerImage: "/images/speaker_03.jpeg",
  },
  {
    time: "17:00 ~ 17:10",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "17:10 ~ 17:20",
    title: "セッション 11：Deno KV でログを永続化する",
    description:
      "Deno KV ハッカソンに提出して技術賞を頂いたログ永続化ライブラリ&デモアプリの設計や制作過程で得られた知見を紹介します。",
    speakerName: "Shun Ueda (Chiezo) - 上田 駿",
    speakerImage: "/images/speaker_05.png",
  },
  {
    time: "17:20 ~ 17:30",
    title: "セッション 12：Deno KV で投稿系サイトを作ってみた話",
    description: "Deno Deploy で KV が使えるようになったので、\"オンライン万華鏡\" の投稿サイトを作ってみました。その中で感じたことなどをお話しします。",
    speakerName: "jinjor - ジンジャー",
    speakerImage: "/images/speaker_06.jpg",
  },
  {
    time: "17:30 ~ 17:40",
    title: "セッション 13：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "17:40 ~ 17:50",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "17:50 ~ 18:00",
    title: "セッション 14：Software DesignでDenoの短期連載したお話し",
    description: `Software DesignでDenoの短期連載をしたので、それについて主に以下のことを話します。
- 連載を担当したきっかけ
- 連載で気をつけた点と学んだこと
- 連載した感想`,
    speakerName: "Gorilla - ゴリラ",
    speakerImage: "/images/speaker_08.jpg",
  },
  {
    time: "18:00 ~ 18:10",
    title: "セッション 15：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "18:10 ~ 18:20",
    title: "セッション 16：coming soon",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "18:20 ~ 18:35",
    title: "セッション 17：開発チームに聞こうのコーナー2",
    description: "",
    speakerName: "Deno 開発チーム",
    speakerImage: "/images/img_deno.png",
  },
  {
    time: "18:35 ~ 19:35",
    title: "懇親会",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "19:35 ~ 19:45",
    title: "クロージング",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  // 他のイベントデータを追加
];

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
    speakerName: "スポンサー 虎の穴ラボ代表取締役 Junichi Noda - 野田 純一",
    speakerImage: "/images/guest_02.png",
  },
  {
    time: "13:10 ~ 13:45",
    title: "基調講演： deno ♥️ npm: Bridging the Gap Between Node and Deno",
    description:
      "Deno's arrival reinvented JavaScript runtime with its focus on security and TypeScript support. Yet, the difference in module systems with Node.js has been a challenge, especially with the vast npm packages left untapped for Deno. No more. We've introducing support for Node built-in modules and npm modules in Deno. This talk will detail the journey of implementing npm support, revealing the hurdles, solutions, and the remarkable possibilities it opens. It's our move to reconcile the power of the npm ecosystem with Deno's secure, efficient runtime.",
    speakerName: "Ryan Dahl - ライアン・ダール",
    speakerImage: "/images/guest_01.png",
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
    title: "セッション 3：TBD",
    description: "",
    speakerName: "Luca Casonato - ルカ・カソナート ",
    speakerImage: "/images/speaker_12.jpg",
  },
  {
    time: "14:50 ~ 15:00",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "15:00 ~ 15:15",
    title: "セッション 4：SupabaseのAI検索機能",
    description:
      "SupabaseにはSupabase ClippyというAI検索機能があります。こちらはユーザーの検索に対してSupabase Edge functionsとOpenAIを駆使してChatGPT風に回答結果をユーザーに返すようになっているものです。最近だとMozillaさん同じ検索機能をサイトに追加しており、今後デファクトになるかもしれないAI検索機能！そんなAI検索機能がどのように実装されているのかをお話しいたします。",
    speakerName: "Tyler - タイラー",
    speakerImage: "/images/speaker_04.png",
  },
  {
    time: "15:15 ~ 15:30",
    title: "セッション 5：TBD",
    description: "",
    speakerName: "Matt Mastracci - マット・マストラッチ",
    speakerImage: "/images/speaker_13.jpg",
  },
  {
    time: "15:30 ~ 15:45",
    title: "セッション 6：金曜 DENO DE SHOW",
    description:
      "一人の技術者が仕事を進めるために必要だった、ヤクの毛刈りに関するおはなし。非同期処理を抽象的に扱うため、unknown 型の扱いを楽にするため、Worker メッセージを抽象的に扱うため、などなど、開発してきた数多のサードパーティモジュールの開発動機や使い方紹介など。",
    speakerName: "Alisue - ありすえ",
    speakerImage: "/images/speaker_02.png",
  },
  {
    time: "15:45 ~ 15:55",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "15:55 ~ 16:00",
    title: "お知らせ",
    description: "協賛スポンサー 虎の穴ラボからのお知らせ",
  },
  {
    time: "16:00 ~ 16:15",
    title: "セッション 7：The power of Web-standards",
    description:
      `Honoは外部ライブラリに依存せず、WinterCGでディスカッションされている「Web-standard APIs」のみを使ったWebフレームワークです。本トークでは「Web-standard APIs」に焦点をあてつつ以下について話します。
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
    title: "セッション 8：The state of web frameworks in Deno",
    description:
      "In this talk, we'll examine the options developers have for web frameworks in Deno for 2023. We'll cover what's supported, what isn't, and highlight a few of the most promising frameworks to start your next project.",
    speakerName: "Kevin Whinnery - ケヴィン・ウィナリー",
    speakerImage: "/images/speaker_10.jpg",
  },
  {
    time: "16:30 ~ 16:45",
    title: "セッション 9：Civic Tech by Open ESM in Pure JavaScript",
    description:
      "36年、100のプログラミング言語を経験して辿り着いたベスト、それが ESM in Pure JavaScript on Deno。シビックテック集団、Code for FUKUIのESモジュールトップ5と共にその魅力をご紹介します。",
    speakerName: "Taisuke Fukuno - 福野泰介",
    speakerImage: "/images/speaker_03.jpeg",
  },
  {
    time: "16:45 ~ 16:55",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "16:55 ~ 17:05",
    title: "セッション 10：Deno KV でログを永続化する",
    description:
      "Deno KV ハッカソンに提出して技術賞を頂いたログ永続化ライブラリ&デモアプリの設計や制作過程で得られた知見を紹介します。",
    speakerName: "Shun Ueda (Chiezo) - 上田 駿",
    speakerImage: "/images/speaker_05.png",
  },
  {
    time: "17:05 ~ 17:15",
    title: "セッション 11：Deno KV で投稿系サイトを作ってみた話",
    description:
      'Deno Deploy で KV が使えるようになったので、"オンライン万華鏡" の投稿サイトを作ってみました。その中で感じたことなどをお話しします。',
    speakerName: "Yosuke Torii - 鳥居 陽介",
    speakerImage: "/images/speaker_06.jpg",
  },
  {
    time: "17:15 ~ 17:25",
    title: "セッション 12：Contributing to Deno is fun!",
    description:
      `Deno 本体のコードは Rust と JavaScript (TypeScript) によって構成されています。JavaScript を書くことができれば誰でもコントリビューターになれます！このセッションでは Deno 内部の JavaScript コードがどのように扱われているかをお話します。一緒にコントリビューターになりましょう！
- V8 スナップショット
- deno_core のブートストラップコード
- コントリビュートの具体例`,
    speakerName: "Kenta Moriuchi (petamoriken) - 森内 建太",
    speakerImage: "/images/speaker_09.jpg",
  },
  {
    time: "17:25 ~ 17:35",
    title: "休憩",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "17:35 ~ 17:45",
    title: "セッション 13：Software DesignでDenoの短期連載したお話し",
    description:
      `Software DesignでDenoの短期連載をしたので、それについて主に以下のことを話します。
- 連載を担当したきっかけ
- 連載で気をつけた点と学んだこと
- 連載した感想`,
    speakerName: "Gorilla - ゴリラ",
    speakerImage: "/images/speaker_08.jpg",
  },
  {
    time: "17:45 ~ 18:00",
    title: "セッション 14： Blazing fast FFI in Deno",
    description:
      "Technical dive into the FFI (Foreign Function Interface) API and its architecture in Deno. We will try to understand the API, its implementation in Deno, what makes it fast and how.",
    speakerName: "Divy Srivastava - ディヴィー・スリヴァスタヴァ",
    speakerImage: "/images/speaker_11.jpg",
  },
  {
    time: "18:00 ~ 18:10",
    title: "セッション 15：FreshでちゃんとWebアプリを作ってみる",
    description: `
以前toranoana.denoで「<a style="text-decoration: underline; color: #2563eb;" target="_blank" href="https://speakerdeck.com/toranoana/toranoana-dot-deno-number-11-freshdepu-tong-nowebapuriwozuo-ru">Freshで普通のWebアプリを作ってみる</a>」という発表をしました。
上記発表では簡略化のため、セッション管理が暗号化したCookieだったり、バックエンドにDBが存在しなかったりしました。
今回の発表では、更に一歩踏み込んで、さらに実務よりのアプリをFreshで作ってみて紹介したいと思います。`,
    speakerName: "Yoshiaki Fujiwara - 藤原 佳顕",
    speakerImage: "/images/speaker_14.png",
  },
  {
    time: "18:10 ~ 18:25",
    title: "セッション 16：開発チームに聞こうのコーナー2",
    description: "",
    speakerName: "Deno 開発チーム",
    speakerImage: "/images/img_deno.png",
  },
  {
    time: "18:25 ~ 18:30",
    title: "クロージング",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
  {
    time: "18:45 ~ 19:45",
    title: "懇親会",
    description: "",
    speakerName: "",
    speakerImage: "",
  },
];

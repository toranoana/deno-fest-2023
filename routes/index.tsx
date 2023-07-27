import { Head } from "$fresh/runtime.ts";
import { LinkButton } from "../components/LinkButton.tsx";
import { TimeTableItem } from "../components/TimeTableItem.tsx";
import { timeTableItems } from "../data/TimeTableItems.ts";
import { SpeakerItem } from "../components/SpeakerItem.tsx";
import { speakerItems } from "../data/SpeakerItems.ts";

function handleClick(event: Event) {
  event.preventDefault();
  const href =
    "https://www.facebook.com/share.php?u=https://deno-fest-2023.deno";
  window.open(
    href,
    "FBwindow",
    "width=650, height=450, menubar=no, toolbar=no, scrollbars=yes",
  );
}

const backgroundStyle = {
  backgroundImage: "url('/images/bg_02.jpg')",
  backgroundSize: "100% auto",
  backgroundPostion: "center top",
  backgroundRepeat: "no-repeat",
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#64D7D7" />
        <meta name="theme-color" content="#64D7D7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="text-gray-800"
        style={{
          background: "linear-gradient(90deg, #2EB8DE 0%, #99F5D1 100%);",
        }}
      >
        <div className="absolute w-full">
          <img
            src="/images/bg_01.jpg"
            className="w-full h-auto"
            width="2880"
            height="1600"
          />
        </div>
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center py-16 relative">
              <h1 className="text-center pt-6">
                <img
                  src="/images/logo_denofest.svg"
                  className="inline-block max-w-sm w-full h-auto"
                  width="560"
                  height="164"
                />
              </h1>
              <div className="p-4 rounded-xl inline-block bg-white shadow lg:px-12 mt-12">
                <div className="mb-3">
                  <span className="inline-block text-2xl font-extrabold">
                    2023.10.20 13:00 start
                  </span>
                  <span className="inline-block text-2xl font-extrabold">
                    @ TOKYO Akihabara
                  </span>
                </div>
                <LinkButton
                  href="https://yumenosora.connpass.com/event/290309/"
                  target="_blank"
                  className="bg-pink-600 text-white"
                >
                  参加申し込みをする（connpass）
                </LinkButton>
              </div>
              <p className="mt-5 font-bold">オンライン配信も実施予定！</p>
              <img
                src="/images/img_deno_01.png"
                className="w-32 h-32 absolute -bottom-4 -right-6 sm:w-48 sm:h-48 md:w-60 md:h-60"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 relative">
              <h2
                className="font-extrabold text-3xl leading-none text-center mb-8"
                style={{ color: "#27B9A7" }}
              >
                Message<br />
                <span className="text-sm">メッセージ</span>
              </h2>
              <div className="md:text-center">
                <p>
                  Deno Festは、JavaScript、TypeScript、および WebAssembly
                  ランタイム Deno のお祭りです。<br />
                  Deno.land inc CEO の Ryan Dahl
                  さんを筆頭に、有名スピーカーの登壇を多数予定しています。<br />
                  ぜひ Deno の今を楽しんでください。
                </p>
                <p className="text-sm mt-3">
                  Deno Fest is a celebration of the JavaScript, TypeScript and
                  WebAssembly runtime Deno. <br />
                  With Ryan Dahl, CEO of Deno.land inc at the top, many famous
                  speakers are scheduled to take the stage. <br />
                  Please enjoy Deno now.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 relative">
              <h2
                className="font-extrabold text-3xl leading-none text-center mb-8"
                style={{ color: "#37A5C3" }}
              >
                Special Guest<br />
                <span className="text-sm">特別ゲスト</span>
              </h2>
              <div className="flex flex-col justify-center -m-2 md:flex-row">
                <div className="p-3 md:w-1/3">
                  <img
                    src="/images/guest_01.jpeg"
                    className="max-w-full rounded-2xl mb-3"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                    width="500"
                    height="500"
                  />
                  <div>
                    {/* <p className="font-bold text-sm">hogehoge株式会社</p> */}
                    <h3 className="font-extrabold text-xl">
                      ライアン・ダール<span className="text-base">氏</span>
                      <span className="text-sm font-normal ml-3">
                        Ryan Dahl
                      </span>
                    </h3>
                    <p className="text-sm mt-3">Node と Deno 作者。</p>
                    <p className="text-xs">The creator of Node and Deno.</p>
                  </div>
                </div>
                {
                  /* <div className="p-3 md:w-1/3">
                  <img
                    src="/images/guest_01.png"
                    className="max-w-full rounded-2xl mb-3"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                    width="500" height="500"
                  />
                  <div>
                    <p className="font-bold text-sm">hogehoge株式会社</p>
                    <h3 className="font-extrabold text-xl">タイラー<span className="text-base">氏</span><span className="text-sm font-normal ml-3">Tailer</span></h3>
                  </div>
                </div>
                <div className="p-3 md:w-1/3">
                  <img
                    src="/images/guest_01.png"
                    className="max-w-full rounded-2xl mb-3"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                    width="500" height="500"
                  />
                  <div>
                    <p className="font-bold text-sm">hogehoge株式会社</p>
                    <h3 className="font-extrabold text-xl">タイラー<span className="text-base">氏</span><span className="text-sm font-normal ml-3">Tailer</span></h3>
                  </div>
                </div> */
                }
              </div>
            </div>
          </div>
          <div>
            <div style={backgroundStyle}>
              <div className="max-w-5xl mx-auto px-4 py-16 relative">
                <h2 className="font-extrabold text-3xl leading-none text-center mb-8">
                  Time Table<br />
                  <span className="text-sm">タイムテーブル</span>
                </h2>
                <div className="text-center">
                  <div className="py-4 px-5 rounded-xl inline-block bg-white shadow mb-6 lg:px-12">
                    <div className="mb-3">
                      <span className="inline-block text-lg font-extrabold">
                        2023.10.18 10:00 start
                      </span>
                      <span className="inline-block text-lg font-extrabold">
                        @ TOKYO Akihabara
                      </span>
                    </div>
                    <LinkButton
                      href="https://yumenosora.connpass.com/event/290309/"
                      target="_blank"
                      className="bg-pink-600 text-white text-xs"
                    >
                      参加申し込みをする（connpass）
                    </LinkButton>
                  </div>
                </div>
                <div
                  className="p-4 rounded-xl flex flex-col gap-4 shadow lg:py-8 lg:px-12 relative"
                  style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                >
                  {/* TimeTableItem コンポーネントの繰り返し表示 */}
                  {timeTableItems.map((timeTableItem, index) => (
                    <TimeTableItem key={index} {...timeTableItem} />
                  ))}
                  {/* TimeTableItem コンポーネントの繰り返し表示ここまで */}
                  <img
                    src="/images/img_deno_02.png"
                    className="absolute w-24 h-24 -top-20 -left-5 pointer-events-none sm:w-32 sm:h-32 sm:-top-24 sm:-left-0 md:w-40 md:h-40 md:-top-32"
                    width="200"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8">
                Speaker<br />
                <span className="text-sm">登壇者</span>
              </h2>
              <div className="flex flex-wrap -m-2 lg:-m-3">
                {/* ここでSpeakerItemコンポーネントを繰り返し表示 */}
                {speakerItems.map((speakerItem, index) => (
                  <SpeakerItem key={index} {...speakerItem} />
                ))}
                {/* ここまでSpeakerItemコンポーネントの繰り返し表示 */}
                {
                  /* <div className="md:w-1/2 p-2 lg:p-3">
                  <div className="p-3 rounded-lg h-full bg-white md:p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="/images/guest_01.png"
                        className="max-w-full rounded-lg"
                        alt="登壇者名が入ります"
                        width="90" height="90"
                      />
                      <div className="">
                        <p className="text-xs font-bold">hogehoge株式会社</p>
                        <h4 className="text-lg font-extrabold">山田 太郎<span className="text-xs">氏</span></h4>
                        <p className="text-xs">Yamada Taro</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm mt-3">紹介文が入ります。紹介文が入ります。紹介文が入ります。</p>
                      <p className="text-xs mt-2">Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.</p>
                    </div>
                  </div>
                </div> */
                }
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 py-16 text-gray-600">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8">
                Notice and Code of Conduct<br />
                <span className="text-sm">注意事項 および 行動規範</span>
              </h2>
              <ul className="text-sm list-disc max-w-3xl mx-auto pl-4">
                <li>
                  セクシュアルハラスメント、パワーハラスメント、ストーカー等の他者への迷惑行為を禁止します。
                </li>
                <li>
                  ネットワークビジネス等、その対象を問わず販売、勧誘、あっせん等を行うこと。また、宗教活動または政治活動を禁止します。
                </li>
                <li>
                  その他、イベントの趣旨・目的から逸脱した行為や、本来のイベント趣旨とは異なる行為があると判断した場合、退場いただいたうえで次回以降のイベント参加をお断りさせて頂きます。
                </li>
                <li>
                  当イベントへの参加は、事前登録をいただいた方のみに限定させていただきます。
                </li>
                <li>
                  イベントの様子をブログや各種メディアにて発信するため、開催中に写真撮影をする場合がございます。ご了承お願い致します。
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 py-16 relative">
              <div className="flex items-center justify-center gap-4">
                <h2 className="font-extrabold text-xl leading-none text-center text-white">
                  Share
                </h2>
                <ul className="flex items-center gap-5 md:gap-8">
                  <li>
                    <a
                      href="https://twitter.com/share?url=https://deno-fest-2023.deno.dev/&text=Deno Fest presented by toranoana.deno&hashtags=とらのあな,虎の穴,Deno"
                      rel="nofollow"
                      target="_blank"
                      class=""
                    >
                      <img
                        src="/images/icon_twitter.svg"
                        width="30"
                        height="30"
                        className="md:w-12 md:h-12"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share.php?u=https://deno-fest-2023.deno.dev/"
                      rel="nofollow"
                      target="_blank"
                      onClick={handleClick}
                    >
                      <img
                        src="/images/icon_facebook.svg"
                        width="30"
                        height="30"
                        className="md:w-12 md:h-12"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://b.hatena.ne.jp/entry/s/https://deno-fest-2023.deno.dev/"
                      data-hatena-bookmark-title="{Title}"
                      data-hatena-bookmark-layout="simple"
                      title="このエントリーをはてなブックマークに追加"
                      class="share-btn__item share-btn__item--hatebu"
                      target="_blank"
                    >
                      <img
                        src="/images/icon_hatena.svg"
                        width="30"
                        height="30"
                        className="md:w-12 md:h-12"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <img
                src="/images/img_deno_03.png"
                className="absolute w-32 h-32 -bottom-20 right-0 pointer-events-none sm:w-36 sm:h-36 sm:-bottom-0 sm:right-10 md:w-40 md:h-40"
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
        <a
          href="https://yumenosora.connpass.com/event/290309/"
          target="_blank"
          className="fixed bottom-3 left-3 bg-white flex items-center justify-center flex-col text-center w-24 h-24 rounded-full border text-xs text-pink-500 font-bold border-4 border-pink-500 ease-linear duration-150 shadow-lg md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:bottom-6 lg:left-6 lg:hover:bg-pink-50 lg:hover:bottom-8"
        >
          参加申し込み<br />をする<br />
          （connpass）
        </a>
        {
          /* <a href="" className="fixed bottom-3 left-3 bg-white flex items-center justify-center flex-col text-center w-24 h-24 rounded-full border text-xs text-pink-500 font-bold border-4 border-pink-500 ease-linear duration-150 shadow-lg md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:bottom-6 lg:left-6 lg:hover:bg-pink-50 lg:hover:bottom-8">
          <img
            src="/images/icon_live.svg"
            width="49" height="24"
            className="mx-auto mb-2"
          />
          オンライン<br />
          配信中
        </a> */
        }
        <footer className="max-w-5xl mx-auto px-4 py-16">
          <p className="text-center text-white">
            <small className="text-xs">©️ 2023 虎の穴ラボ株式会社</small>
          </p>
        </footer>
      </div>
      {
        /* <div className="p-4 mx-auto max-w-screen-md">
        <img
          src="/images/banner_movie.jpg"
          className="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p className="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Button>もっと見る</Button>
        <div className="mx-auto max-w-screen-md p-4">
          <ModalMounter text={"テキストテキスト"} imgpath={"/images/banner_movie.jpg"} />
          <ModalMounter text={"レモン"} imgpath={"/logo.svg"} />
        </div>
        <Counter count={count} />
      </div> */
      }
    </>
  );
}

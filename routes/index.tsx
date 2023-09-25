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
        <meta property="og:title" content="Deno Fest ディノフェス - presented by toranoana.deno" />
        <meta property="og:description" content="Deno のお祭り　Deno Fest ディノフェス　2023.10.20オフライン、オンラインで開催！！" />
        <meta property="og:url" content="https://deno-fest-2023.deno.dev/" />
        <meta property="og:site_name" content="Deno Fest ディノフェス - presented by toranoana.deno" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/ogp-01.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toranoana_lab" />
        <meta name="twitter:title" content="Deno Fest ディノフェス - presented by toranoana.deno" />
        <meta name="twitter:description" content="Deno のお祭り　Deno Fest ディノフェス　2023.10.20オフライン、オンラインで開催！！" />
        <meta name="twitter:image" content="/images/ogp-01.png" />

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
        <link defer rel="stylesheet" href="//use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous"></link>
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
              <div className="p-4 rounded-xl inline-block bg-white shadow sm:px-8 md:px-12 mt-12">
                <div className="mb-3 flex flex-col items-center sm:flex-row sm:gap-4">
                  <span className="inline-block text-2xl font-extrabold">
                    2023.10.20 13:00 start
                  </span>
                  <a href="#access" className="inline-block text-2xl font-extrabold underline hover:no-underline">
                    @TOKYO Akihabara
                  </a>
                </div>
                <p className="mt-4 font-bold">
                  ＼　オフライン、オンラインで開催！！ ／
                </p>
                <LinkButton
                  href="https://yumenosora.connpass.com/event/290309/"
                  target="_blank"
                  className="bg-pink-600 text-white mt-2 hover:opacity-70 ease-linear duration-150"
                >
                  参加申し込みをする（connpass）
                </LinkButton>
              </div>
              <img
                src="/images/img_deno_01.png"
                className="w-32 h-32 absolute -bottom-4 -right-6 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-64 lg:h-64"
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
                Message from the organizer<br />
                <span className="text-sm">主催者からのメッセージ</span>
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
                    src="/images/guest_01.png"
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
                    <div className="mb-3 flex flex-col sm:gap-2 sm:flex-row">
                      <span className="inline-block text-lg font-extrabold">
                        2023.10.20 13:00 start
                      </span>
                      <a href="" className="inline-block text-lg font-extrabold underline hover:no-underline">
                        @TOKYO Akihabara
                      </a>
                    </div>
                    <p className="mt-3 font-bold text-sm">
                      ＼　オフライン、オンラインで開催！！ ／
                    </p>
                    <LinkButton
                      href="https://yumenosora.connpass.com/event/290309/"
                      target="_blank"
                      className="bg-pink-600 text-white text-xs mt-2 hover:opacity-70 ease-linear duration-150"
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
              </div>
            </div>
          </div>
          <div id="access">
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8">
                Access<br />
                <span className="text-sm">アクセス</span>
              </h2>
              <iframe className="h-[200px] md:h-[350px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.385951915328!2d139.7697966022491!3d35.69988444635659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1c52026005%3A0x4e55145da9c5a233!2z44CSMTAxLTAwMjEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65aSW56We55Sw77yR5LiB55uu77yX4oiS77yV!5e0!3m2!1sja!2sjp!4v1695640475761!5m2!1sja!2sjp" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className="text-sm mt-4 flex flex-col sm:gap-2 sm:flex-row justify-between">
                <p>
                  東京都千代田区外神田1-7-5　フロントプレイス秋葉原 2階・3階<br />
                  TKPガーデンシティPREMIUM秋葉原 3B
                </p>
                <a className="underline hover:no-underline" target="_blank" href="https://maps.app.goo.gl/HCNbiVEi8dzGgbiB6">Google mapでみる</a>
              </div>
              {/* <div className="mt-12">
                <h2 className="font-extrabold text-xl leading-none text-center mb-6">
                  Way<br />
                  <span className="text-xs">行き方</span>
                </h2>
                <iframe className="mx-auto rounded-lg h-[200px] md:h-[400px] max-w-full" width="700" height="400" src="https://www.youtube.com/embed/Hiq834lITSs?si=4s5CTJ3iXK3vdLM5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div> */}
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 pt-16 text-gray-600">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8">
                Corona measures<br />
                <span className="text-sm">コロナ対策</span>
              </h2>
              <ul className="text-sm list-disc max-w-3xl mx-auto pl-4">
                <li>
                  感染拡大などやむをえない事情があった場合、オフラインでの開催は中止させて頂く場合があります。ご了承下さい。
                </li>
                <li>
                  発熱(37.5度以上)や風邪などの症状がある場合、参加をお控えください。
                </li>
                <li>
                  会場内ではマスクの着用のご協力をお願いいたします。大声での会話はお控えください。
                </li>
                <li>
                  会場施設の入口に消毒液が設置いたします。入場時に手の消毒をお願いいたします。
                </li>
              </ul>
            </div>
            <div className="max-w-5xl mx-auto px-4 pt-8 pb-16  text-gray-600">
              <ul className="text-sm list-disc max-w-3xl mx-auto pl-4">
                <li>
                  In the event of unavoidable circumstances, such as the spread of infection, the offline event may be cancelled. Thank you for your understanding.
                </li>
                <li>
                  Please refrain from participating if you have a fever (37.5 degrees Celsius or higher) or cold.
                </li>
                <li>
                  Please wear a mask in the venue. Please refrain from loud conversations.
                </li>
                <li>
                  Disinfectant solution will be available at the entrance of the venue. Please disinfect your hands upon entering the venue.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 pt-16 text-gray-600">
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
            <div className="max-w-5xl mx-auto px-4 pt-8 pb-16 text-gray-600">
              <ul className="text-sm list-disc max-w-3xl mx-auto pl-4">
                <li>
                  Sexual harassment, power harassment, stalking, or other disruptive behavior toward others is prohibited.
                </li>
                <li>
                  Selling, soliciting, or mediating in network businesses, etc., regardless of the subject matter. Religious or political activities are also prohibited.
                </li>
                <li>
                  Any other behavior that deviates from the purpose or objectives of the event or is deemed to be inconsistent with the original intent of the event will result in the participant being asked to leave the venue and not being allowed to participate in future events.
                </li>
                <li>
                  Participation in this event is limited to those who have pre-registered.
                </li>
                <li>
                  Photos may be taken during the event for the purpose of disseminating information about the event on blogs and various media. We ask for your understanding.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8 text-gray-600">
                Sponsorship<br />
                <span className="text-sm">協賛</span>
              </h2>
              <div className="flex items-center justify-center gap-6 md:gap-12">
                <div className="text-center">
                  <a href="https://yumenosora.co.jp/tora-lab" target="_blank" className="hover:opacity-70 ease-linear duration-150">
                    <img
                      src="/images/logo_lab.png"
                      width="1129"
                      height="361"
                      className="w-auto h-10 md:h-14"
                    />
                  </a>
                  <a className="mt-2 inline-block font-bold hover:opacity-70" href="https://yumenosora.co.jp/tora-lab/recruit#toralab-jobs" target="_blank">エンジニア募集中</a>
                </div>
                <a href="https://deno.land/" target="_blank" className="hover:opacity-70 ease-linear duration-150">
                  <img
                    src="/images/logo_deno.png"
                    width="1351"
                    height="512"
                    className="w-auto h-16 md:h-24"
                  />
                </a>
              </div>
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
                      href="https://twitter.com/share?url=https://deno-fest-2023.deno.dev/&text=Deno Fest presented by toranoana.deno&hashtags=とらのあな,虎の穴,deno,deno_fest,toranoana_deno"
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
          /* <a href="https://www.youtube.com/watch?v=dAt-r7-Imgk" target="_blank" className="fixed bottom-3 left-3 bg-white flex items-center justify-center flex-col text-center w-24 h-24 rounded-full border text-xs text-pink-500 font-bold border-4 border-pink-500 ease-linear duration-150 shadow-lg md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:bottom-6 lg:left-6 lg:hover:bg-pink-50 lg:hover:bottom-8">
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

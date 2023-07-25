import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { LinkButton } from "../components/LinkButton.tsx";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import ModalMounter from "../islands/ModalMounter.tsx";

function handleClick(event: Event) {
  event.preventDefault();
  const href = "https://www.facebook.com/share.php?u=https://deno-fest-2023.deno";
  window.open(href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
}

export default function Home() {
  const count = useSignal(3);
  const backgroundStyle = {
    backgroundImage: "url('/images/bg_02.jpg')",
    backgroundSize: "100% auto",
    backgroundPostion: "center top",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <Head>
        <title>test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="text-gray-800" style={{ background: "linear-gradient(90deg, #2EB8DE 0%, #99F5D1 100%);" }}>
        <div className="absolute w-100">
          <img
            src="/images/bg_01.jpg"
            className="w-100 h-auto"
            width="2880" height="1600"
          />
        </div>
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center py-16 relative">
              <h1>Deno Fest<br/><small>presented by toranoana.deno</small></h1>
              <div className="p-4 rounded-xl inline-block bg-white shadow lg:px-12">
                <div className="mb-3">
                  <span className="inline-block text-2xl font-extrabold">2023.10.18 10:00 start</span>
                  <span className="inline-block text-2xl font-extrabold">@ TOKYO Akihabara</span>
                </div>
                <LinkButton href="https://example.com" className="bg-pink-600 text-white">参加申し込みをする（connpass）</LinkButton>
              </div>
              <p className="mt-5 font-bold">オンライン配信も実施予定！</p>
              <img
                src="/images/img_deno_01.png"
                className="w-32 h-32 absolute -bottom-4 -right-6 sm:w-48 sm:h-48 md:w-60 md:h-60"
                width="300" height="300"
              />
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 relative">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8" style={{ color: '#27B9A7' }}>Message<br/><span className="text-sm">メッセージ</span></h2>
              <div className="md:text-center">
                <p>Deno Festは、JavaScript、TypeScript、および WebAssembly ランタイム Deno のお祭りです。<br />
                Deno.land inc CEO の Ryan Dahl さんを筆頭に、有名スピーカーの登壇を多数予定しています。<br />
                ぜひ Deno の今を楽しんでください。</p>
                <p className="text-sm mt-3">Deno Fest is a celebration of the JavaScript, TypeScript and WebAssembly runtime Deno. <br />
                With Ryan Dahl, CEO of Deno.land inc at the top, many famous speakers are scheduled to take the stage. <br />
                Please enjoy Deno now.</p>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-5xl mx-auto px-4 py-16 relative">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8" style={{ color: '#37A5C3' }}>Special Guest<br/><span className="text-sm">特別ゲスト</span></h2>
              <div className="flex flex-col justify-center -m-2 md:flex-row">
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
                </div>
                {/* <div className="p-3 md:w-1/3">
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
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <div style={backgroundStyle}>
              <div className="max-w-5xl mx-auto px-4 py-16 relative">
                <h2 className="font-extrabold text-3xl leading-none text-center mb-8">Time Table<br/><span className="text-sm">タイムテーブル</span></h2>
                <div className="text-center">
                  <div className="py-4 px-5 rounded-xl inline-block bg-white shadow mb-6 lg:px-12">
                    <div className="mb-3">
                      <span className="inline-block text-lg font-extrabold">2023.10.18 10:00 start</span>
                      <span className="inline-block text-lg font-extrabold">@ TOKYO Akihabara</span>
                    </div>
                    <LinkButton href="https://example.com" className="bg-pink-600 text-white text-xs">参加申し込みをする（connpass）</LinkButton>
                  </div>
                </div>
                <div className="p-4 rounded-xl flex flex-col gap-4 shadow lg:py-8 lg:px-12 relative" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                  <div className="flex flex-col gap-1 flex-1 md:flex-row md:items-center">
                    <span className="w-16 font-bold">10:00〜</span>
                    <div className="p-4 rounded-lg bg-white shadow flex-1">
                      <h4 className="font-bold">始めのご挨拶</h4>
                      <p className="text-sm">opening greeting</p>
                      <div className="flex justify-end items-center">
                        <span className="text-xs font-bold">登壇者名が入ります</span>
                        <img
                          src="/images/guest_01.png"
                          className="max-w-full rounded-lg ml-3"
                          alt="登壇者名が入ります"
                          width="40" height="40"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 flex-1 md:flex-row md:items-center">
                    <span className="w-16 font-bold">10:00〜</span>
                    <div className="p-4 rounded-lg bg-white shadow flex-1">
                      <h4 className="font-bold">始めのご挨拶</h4>
                      <p className="text-sm">opening greeting</p>
                      <div className="flex justify-end items-center">
                        <span className="text-xs font-bold">登壇者名が入ります</span>
                        <img
                          src="/images/guest_01.png"
                          className="max-w-full rounded-lg ml-3"
                          alt="登壇者名が入ります"
                          width="40" height="40"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 flex-1 md:flex-row md:items-center">
                    <span className="w-16 font-bold">10:00〜</span>
                    <div className="p-4 rounded-lg bg-white shadow flex-1">
                      <h4 className="font-bold">始めのご挨拶</h4>
                      <p className="text-sm">opening greeting</p>
                      <div className="flex justify-end items-center">
                        <span className="text-xs font-bold">登壇者名が入ります</span>
                        <img
                          src="/images/guest_01.png"
                          className="max-w-full rounded-lg ml-3"
                          alt="登壇者名が入ります"
                          width="40" height="40"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    src="/images/img_deno_02.png"
                    className="absolute w-24 h-24 -top-20 -left-5 pointer-events-none sm:w-32 sm:h-32 sm:-top-24 sm:-left-0 md:w-40 md:h-40 md:-top-32"
                    width="200" height="200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 py-16">
              <h2 className="font-extrabold text-3xl leading-none text-center mb-8">Speaker<br/><span className="text-sm">登壇者</span></h2>
              <div className="flex flex-wrap -m-2 lg:-m-3">
                <div className="md:w-1/2 p-2 lg:p-3">
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
                      <p className="text-sm mt-3">紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。紹介文が入ります。</p>
                      <p className="text-xs mt-2">Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.Enter an introduction.</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-2 lg:p-3">
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
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-5xl mx-auto px-4 py-16 relative">
              <div className="flex items-center justify-center gap-4">
                <h2 className="font-extrabold text-xl leading-none text-center text-white">Share</h2>
                <ul className="flex items-center gap-5 md:gap-8">
                  <li><a href="https://twitter.com/share?url=https://deno-fest-2023.deno&text=とらのあなTech Conference開催！&hashtags=とらのあな,虎の穴,Tech Conference" rel="nofollow" target="_blank" class="">
                    <img
                      src="/images/icon_twitter.svg"
                      width="30" height="30"
                      className="md:w-12 md:h-12"
                    />
                    </a></li>
                  <li><a href="https://www.facebook.com/share.php?u=https://deno-fest-2023.deno" rel="nofollow" target="_blank" onClick={handleClick}>
                    <img
                      src="/images/icon_facebook.svg"
                      width="30" height="30"
                      className="md:w-12 md:h-12"
                    />
                    </a></li>
                  <li><a href="https://b.hatena.ne.jp/entry/s/https://deno-fest-2023.deno" data-hatena-bookmark-title="{Title}" data-hatena-bookmark-layout="simple" title="このエントリーをはてなブックマークに追加" class="share-btn__item share-btn__item--hatebu" target="_blank">
                    <img
                      src="/images/icon_hatena.svg"
                      width="30" height="30"
                      className="md:w-12 md:h-12"
                    />
                    </a></li>
                </ul>
              </div>
              <img
                src="/images/img_deno_03.png"
                className="absolute w-32 h-32 -bottom-20 right-0 pointer-events-none sm:w-36 sm:h-36 sm:-bottom-0 sm:right-10 md:w-40 md:h-40"
                width="250" height="250"
              />
            </div>
          </div>
        </div>
        <a href="" className="fixed bottom-3 left-3 bg-white flex items-center justify-center flex-col text-center w-24 h-24 rounded-full border text-xs text-pink-500 font-bold border-4 border-pink-500 ease-linear duration-150 shadow-lg md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:bottom-6 lg:left-6 lg:hover:bg-pink-50 lg:hover:bottom-8">
          参加申し込み<br />をする<br />
          （connpass）
        </a>
        {/* <a href="" className="fixed bottom-3 left-3 bg-white flex items-center justify-center flex-col text-center w-24 h-24 rounded-full border text-xs text-pink-500 font-bold border-4 border-pink-500 ease-linear duration-150 shadow-lg md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:bottom-6 lg:left-6 lg:hover:bg-pink-50 lg:hover:bottom-8">
          <img
            src="/images/icon_live.svg"
            width="49" height="24"
            className="mx-auto mb-2"
          />
          オンライン<br />
          配信中
        </a> */}
        <footer className="max-w-5xl mx-auto px-4 py-16">
          <p className="text-center text-white"><small className="text-xs">©️ 2023 虎の穴ラボ株式会社</small></p>
        </footer>
      </div>
      {/* <div className="p-4 mx-auto max-w-screen-md">
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
      </div> */}
    </>
  );
}

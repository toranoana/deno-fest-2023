import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { LinkButton } from "../components/LinkButton.tsx";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";
import ModalMounter from "../islands/ModalMounter.tsx";


export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>test</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <div>
          <div class="max-w-5xl mx-auto px-4 text-center">
            <h1>Deno Fest<br/><small>presented by toranoana.deno</small></h1>
            <div class="py-3 pr-3 pl-8 rounded-full inline-block bg-white shadow"><span class="text-lg font-extrabold mr-5">2023.10.18 10:00 start　@ TOKYO Akihabara</span><LinkButton href="https://example.com">参加申し込みをする（connpass）</LinkButton></div>
            <p class="mt-5"><small class="font-bold">オンライン配信中！</small></p>
          </div>
        </div>
        <div>
          <div class="max-w-5xl mx-auto px-4">
            <h2 class="font-extrabold text-3xl leading-none text-center">Message<br/><span class="text-sm">メッセージ</span></h2>
            <div>
              <p>とらのあなラボ テックカンファレンスは、虎の穴ラボの技術領域の取り組みをお伝えするカンファレンスです。<br/>
  今回のVol.2ではひとつのセッションを短くし、より聞きやすく、より多くの内容を発信していきます。<br/>
  進化し続ける虎の穴ラボの「今」を、ぜひお楽しみください。</p>
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-5xl mx-auto px-4">
            <h2>Special Guest<br/>特別ゲスト</h2>
            <div class="">
              <div class="">
                <img class="max-w-full" src="" alt="" width="500" height="500" />
                <div>
                  <p>hogehoge株式会社</p>
                  <h3>山田太郎<small>氏</small><span>Taro Yamada</span></h3>
                </div>
              </div>
              <div>
                <img class="max-w-full" src="" alt="" width="500" height="500" />
                <div>
                  <p>hogehoge株式会社</p>
                  <h3>山田太郎<small>氏</small><span>Taro Yamada</span></h3>
                </div>
              </div>
              <div>
                <img class="max-w-full" src="" alt="" width="500" height="500" />
                <div>
                  <p>hogehoge株式会社</p>
                  <h3>山田太郎<small>氏</small><span>Taro Yamada</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-5xl mx-auto px-4">
            <h2>Time Table<br/>タイムテーブル</h2>
          </div>
        </div>
      </div>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/images/banner_movie.jpg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Button>もっと見る</Button>
        <div class="mx-auto max-w-screen-md p-4">
          <ModalMounter text={"テキストテキスト"} imgpath={"/images/banner_movie.jpg"} />
          <ModalMounter text={"レモン"} imgpath={"/logo.svg"} />
        </div>
        <Counter count={count} />
      </div>
    </>
  );
}

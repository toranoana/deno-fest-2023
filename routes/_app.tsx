import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Deno Fest ディノフェス - presented by toranoana.deno</title>
      </Head>

      <div className="wrapper overflow-x-hidden">
        <Component />
      </div>
    </>
  );
}

import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component}: AppProps) {
  //do something with state here
  return (
    <>
      <Head>
        <title>test</title>
      </Head>

      <div class="wrapper">
        <Component />
      </div>
    </>
  );
}

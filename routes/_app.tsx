import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App({ Component}: AppProps) {
  //do something with state here
  return (
    <>
      <Head>
        <title>test</title>
      </Head>

      <div className="wrapper text-gray-800 overflow-x-hidden">
        <Component />
      </div>
    </>
  );
}

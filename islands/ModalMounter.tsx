import { JSX } from "preact";
import { useState } from "preact/hooks";
import Modal from "../components/Modal.tsx";

export default function ModalMounter(
  props: JSX.HTMLAttributes<HTMLElement> & { text: string; imgpath: string },
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // イベントの補足のために用意したが、無くても良い
  const beforeOpen = () => console.log("beforeOpen");
  const afterOpen = () => console.log("afterOpen");
  const beforeClose = () => console.log("beforeClose");
  const afterClose = () => console.log("afterClose");

  return (
    <>
      <button
        class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 disabled:(opacity-50 cursor-not-allowed)"
        onClick={() => setIsOpen(true)}
      >
        もっと見る
      </button>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isNoBackdropClose={false}
        class="p-2 border-2 border-gray-100 rounded"
        beforeOpen={beforeOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        afterClose={afterClose}
      >
        <div class="flex flex-col">
          <div class="mb-4">
            <h2 class="text-2xl">{props.text}</h2>
            <img src={props.imgpath} alt="" />
            <p>1. Just-in-time rendering on the edge.</p>
            <p>2. Island based client hydration for maximum interactivity.</p>
            <p>
              3. Zero runtime overhead: no JS is shipped to the client by
              default.
            </p>
            <p>4. No build step.</p>
            <p>5. No configuration necessary.</p>
            <p>6. TypeScript support out of the box.</p>
          </div>
          <div class="">
            <button
              class="w-full px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 disabled:(opacity-50 cursor-not-allowed)"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isNoBackdropClose?: boolean;
  beforeOpen?: () => void | Promise<void>;
  afterOpen?: () => void | Promise<void>;
  beforeClose?: () => void | Promise<void>;
  afterClose?: () => void | Promise<void>;
}

export default function Modal(props: Props & JSX.HTMLAttributes) {
  const didMountRef = useRef(false);
  const ref = useRef<HTMLDialogElement | null>(null);

  const doOpen = async () => {
    if (props.beforeOpen) await props.beforeOpen();
    ref.current?.showModal();
    if (props.afterOpen) await props.afterOpen();
  };
  const doClose = async () => {
    if (props.beforeClose) await props.beforeClose();
    ref.current?.close();
    props.setIsOpen(false);
    if (props.afterClose) await props.afterClose();
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (props.isOpen) {
      doOpen();
      return;
    }
    doClose();
  }, [props.isOpen]);

  return (
    <>
      <dialog
        ref={ref}
        class={`p-0 bg-transparent ${
          props.class?.split(" ").filter((p) => p.match(/^[h,w]/)).join(" ")
        }`}
        onClick={() => {
          !props.isNoBackdropClose && doClose();
        }}
      >
        <div
          class={`w-full h-full bg-white ${
            props.class?.split(" ").filter((p) => !p.match(/^[h,w]-/)).join(" ")
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </dialog>
    </>
  );
}

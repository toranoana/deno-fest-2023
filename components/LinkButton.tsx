import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function LinkButton(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      href={props.href}
      disabled={!IS_BROWSER || props.disabled}
      class="p-3 rounded-full inline-block bg-white shadow hover:bg-gray-200"
    />
  );
}

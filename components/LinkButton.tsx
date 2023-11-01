import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function LinkButton(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  const { href, class: additionalClass, ...restProps } = props;
  const linkClass = `py-3 px-5 rounded-full shadow-md inline-block font-bold ${
    additionalClass || ""
  }`.trim();

  return (
    <a
      {...restProps}
      href={href}
      disabled={!IS_BROWSER || props.disabled}
      class={linkClass}
    />
  );
}

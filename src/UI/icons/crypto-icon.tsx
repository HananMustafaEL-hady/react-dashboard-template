import * as React from "react";
import { SVGProps, memo } from "react";
const SvgCryptoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="crypto-icon_svg__icon-20"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M10.117.333H3.889C1.619.333.333 1.62.333 3.89v6.222c0 2.27 1.286 3.556 3.556 3.556h6.228c2.27 0 3.55-1.286 3.55-3.556V3.89c0-2.27-1.28-3.556-3.55-3.556Z"
      fill="currentColor"
    />
    <path
      d="M3.912 5.246a.555.555 0 0 0-.55.557v4.58a.554.554 0 0 0 1.107 0v-4.58a.556.556 0 0 0-.557-.557ZM7.023 3.06a.555.555 0 0 0-.551.557v6.767a.554.554 0 0 0 1.108 0V3.617a.556.556 0 0 0-.557-.557ZM10.093 7.664a.556.556 0 0 0-.557.557v2.163a.554.554 0 0 0 1.108 0V8.221a.555.555 0 0 0-.55-.557Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgCryptoIcon);
export default Memo;

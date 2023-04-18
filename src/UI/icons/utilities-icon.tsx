import * as React from "react";
import { SVGProps, memo } from "react";
const SvgUtilitiesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    className="utilities-icon_svg__icon-20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    {...props}
  >
    <path
      opacity={0.4}
      d="M11.991 18.622 5.5 21.864a1.02 1.02 0 0 1-1.376-.4A1.09 1.09 0 0 1 4 20.967v-7.258c0 .72.406 1.164 1.473 1.661l6.518 3.252Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.895 2h6.175c2.707 0 4.904 1.066 4.93 3.793v15.174c-.001.17-.044.338-.123.488a1.008 1.008 0 0 1-1.402.409l-6.484-3.242-6.518-3.252C4.406 14.873 4 14.428 4 13.71V5.793C4 3.066 6.196 2 8.895 2Zm-.67 7.622h7.524a.788.788 0 0 0 .785-.79.788.788 0 0 0-.785-.791H8.225a.788.788 0 0 0-.785.79c0 .437.351.791.785.791Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgUtilitiesIcon);
export default Memo;

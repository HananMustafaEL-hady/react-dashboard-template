import * as React from "react";
import { SVGProps, memo } from "react";
const SvgLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="logo-icon_svg__icon-30"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.253 2h14.791l7.68 13.21-7.68 12.923H7.254L0 15.21 7.253 2Zm3.983 7.323h6.826l3.271 5.887-3.27 5.744h-6.827l-3.13-5.744 3.13-5.887Z"
    />
    <path d="M23.751 30 13.227 15.21h8.248L32 30H23.75Z" />
  </svg>
);
const Memo = memo(SvgLogoIcon);
export default Memo;

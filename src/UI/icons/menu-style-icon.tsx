import * as React from "react";
import { SVGProps, memo } from "react";
const SvgMenuStyleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    className="menu-style-icon_svg__icon-20"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    {...props}
  >
    <path
      opacity={0.4}
      d="M13.666 7A6.666 6.666 0 0 1 7 13.667 6.667 6.667 0 1 1 13.667 7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.014 6.202a.799.799 0 1 0 0 1.598.799.799 0 0 0 0-1.598Zm2.986 0A.799.799 0 1 0 7 7.8a.799.799 0 0 0 0-1.598ZM9.187 7a.799.799 0 1 1 1.598.003A.799.799 0 0 1 9.187 7Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgMenuStyleIcon);
export default Memo;

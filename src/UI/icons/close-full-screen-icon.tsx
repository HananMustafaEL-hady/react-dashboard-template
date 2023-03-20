import * as React from "react";
import { SVGProps, memo } from "react";
const SvgCloseFullScreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="close-full-screen-icon_svg__full-normal-screen close-full-screen-icon_svg__icon-32"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.754 10.193 4.433-4.4"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m17.298 10.212-3.543-.019.032-3.568"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10.422 13.573-4.6 4.567"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m6.744 13.553 3.677.02-.034 3.703"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Memo = memo(SvgCloseFullScreenIcon);
export default Memo;

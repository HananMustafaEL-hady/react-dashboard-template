import * as React from "react";
import { SVGProps, memo } from "react";
const SvgFullScreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="full-screen-icon_svg__normal-screen full-screen-icon_svg__icon-24"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.553 5.997-4.694 4.9M14.802 5.976l3.75.02-.034 3.973M5.857 18.896l4.694-4.9M9.609 18.916l-3.751-.02.035-3.973"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Memo = memo(SvgFullScreenIcon);
export default Memo;

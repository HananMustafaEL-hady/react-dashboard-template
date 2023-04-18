import * as React from "react";
import { SVGProps, memo } from "react";
const SvgDotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="dot-icon_svg__icon-10"
    width="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={8} />
  </svg>
);
const Memo = memo(SvgDotIcon);
export default Memo;

import * as React from "react";
import { SVGProps, memo } from "react";
const SvgDropdownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    className="dropdown-arrow-icon_svg__icon-18"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="currentColor"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 5 7 7-7 7"
    />
  </svg>
);
const Memo = memo(SvgDropdownArrowIcon);
export default Memo;

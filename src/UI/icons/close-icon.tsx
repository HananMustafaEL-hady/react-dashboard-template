import * as React from "react";
import { SVGProps, memo } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M.781 16a.782.782 0 0 1-.552-1.334L14.666.23a.781.781 0 1 1 1.105 1.105L1.334 15.77a.779.779 0 0 1-.553.23Z" />
    <path d="M15.219 16a.779.779 0 0 1-.553-.229L.23 1.334A.781.781 0 1 1 1.334.229L15.77 14.666A.78.78 0 0 1 15.22 16Z" />
  </svg>
);
const Memo = memo(SvgCloseIcon);
export default Memo;

import * as React from "react";
import { SVGProps, memo } from "react";
const SvgTableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="table-icon_svg__icon-20"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    viewBox="0 0 24 24"
    fill="none"
    height="1em"
    {...props}
  >
    <path
      d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3H2V5Z"
      fill="currentColor"
      stroke="currentColor"
    />
    <path
      d="M6 8H2v3m4-3v12M6 8h8M6 20H3a1 1 0 0 1-1-1v-8m4 9h8m0-12h8v3m-8-3v12m0 0h7a1 1 0 0 0 1-1v-8M2 11h20M2 14h20M2 17h20M10 8v12m8-12v12"
      stroke="currentColor"
    />
  </svg>
);
const Memo = memo(SvgTableIcon);
export default Memo;

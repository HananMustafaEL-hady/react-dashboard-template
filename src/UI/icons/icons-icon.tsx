import * as React from "react";
import { SVGProps, memo } from "react";
const SvgIconsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="icons-icon_svg__icon-20"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    {...props}
  >
    <path d="M8 10.538a2 2 0 0 1 2-2h1.333a2 2 0 0 1 2 2v9.29a2 2 0 0 0 2 2H16s-3.238 1.495-5.333 1.108c-.53-.098-1.145-.345-1.65-.58-.643-.3-1.017-.963-1.017-1.673V10.538Z" />
    <rect opacity={0.4} x={8} y={1} width={5} height={5} rx={2.5} />
  </svg>
);
const Memo = memo(SvgIconsIcon);
export default Memo;

import * as React from "react";
import { SVGProps, memo } from "react";
const SvgSearchDropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      opacity={0.5}
      x={17.037}
      y={15.122}
      width={8.155}
      height={2}
      rx={1}
      transform="rotate(45 17.037 15.122)"
      fill="currentColor"
    />
    <path
      d="M11 19c-4.444 0-8-3.556-8-8s3.556-8 8-8 8 3.556 8 8-3.556 8-8 8Zm0-14c-3.467 0-6 2.533-6 6s2.533 6 6 6 6-2.533 6-6-2.533-6-6-6Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSearchDropIcon);
export default Memo;

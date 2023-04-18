import * as React from "react";
import { SVGProps, memo } from "react";
const SvgSpecialPagesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    className="special-pages-icon_svg__icon-20"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    {...props}
  >
    <path
      opacity={0.4}
      d="M6.85 12.558a24.172 24.172 0 0 1-4.218-3.305A8.445 8.445 0 0 1 .612 6.05C-.149 3.69.735.993 3.2.192a4.188 4.188 0 0 1 3.803.675A4.194 4.194 0 0 1 10.81.192c2.464.801 3.353 3.498 2.595 5.858a8.446 8.446 0 0 1-2.009 3.203 24.389 24.389 0 0 1-4.219 3.305l-.166.109-.16-.109Z"
      fill="currentColor"
    />
    <path
      d="m7.007 12.667-.157-.109a24.21 24.21 0 0 1-4.224-3.305A8.444 8.444 0 0 1 .593 6.05C-.159 3.69.723.993 3.19.192a4.197 4.197 0 0 1 3.818.682v11.793ZM11.153 4.666a.479.479 0 0 1-.345-.185.546.546 0 0 1-.111-.394c.014-.468-.252-.895-.663-1.06-.26-.072-.418-.354-.353-.632.062-.274.318-.444.576-.382a.256.256 0 0 1 .092.034c.824.317 1.357 1.17 1.315 2.103a.538.538 0 0 1-.153.374.472.472 0 0 1-.358.142Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgSpecialPagesIcon);
export default Memo;

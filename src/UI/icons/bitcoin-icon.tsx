import * as React from "react";
import { SVGProps, memo } from "react";
const SvgBitcoinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="bitcoin-icon_svg__me-2"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#bitcoin-icon_svg__a)">
      <path
        d="M23.641 14.902c-1.603 6.432-8.12 10.342-14.543 8.739C2.666 22.037-1.244 15.52.36 9.098 1.963 2.666 8.47-1.244 14.902.36c6.423 1.593 10.342 8.11 8.739 14.542Z"
        fill="url(#bitcoin-icon_svg__b)"
      />
      <path
        d="M17.713 10.505c.235-1.594-.975-2.457-2.644-3.029l.544-2.165-1.312-.328-.525 2.109a35.05 35.05 0 0 0-1.06-.244l.525-2.119-1.312-.328-.535 2.157c-.29-.066-.572-.132-.843-.197v-.01l-1.82-.45-.346 1.407s.975.225.956.234c.535.131.628.487.61.769l-.62 2.465c.038.01.085.02.141.047a.77.77 0 0 1-.14-.037l-.863 3.45c-.065.16-.234.403-.6.31.01.018-.956-.235-.956-.235l-.656 1.51 1.715.43c.32.085.629.16.938.244l-.544 2.184 1.313.329.543-2.166c.357.094.713.188 1.05.272l-.534 2.156 1.313.328.543-2.184c2.25.422 3.938.253 4.641-1.781.572-1.632-.028-2.578-1.21-3.197.873-.197 1.52-.769 1.688-1.931Zm-3.01 4.218c-.402 1.632-3.159.75-4.05.525l.723-2.897c.89.225 3.759.666 3.328 2.372Zm.413-4.247c-.375 1.491-2.662.732-3.403.544l.656-2.625c.741.188 3.132.534 2.747 2.081Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="bitcoin-icon_svg__b"
        x1={11.993}
        y1={-0.006}
        x2={11.993}
        y2={23.998}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={1} stopColor="#F9AA4B" />
        <stop offset={1} stopColor="#F7931A" />
      </linearGradient>
      <clipPath id="bitcoin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgBitcoinIcon);
export default Memo;

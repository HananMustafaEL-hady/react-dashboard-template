import * as React from "react";
import { SVGProps, memo } from "react";
const SvgAnalyticsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    className="analytics-icon_svg__icon-20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.162 3.158a2.683 2.683 0 0 0 3.171 2.634v5.316c0 2.236-1.319 3.559-3.558 3.559H4.897c-2.245 0-3.564-1.323-3.564-3.56v-4.87c0-2.236 1.319-3.57 3.564-3.57h5.311a2.552 2.552 0 0 0-.046.491ZM8.765 9.931l1.906-2.459v-.011a.503.503 0 0 0-.094-.697.487.487 0 0 0-.692.1L8.28 8.93 6.45 7.49a.493.493 0 0 0-.697.094l-1.97 2.54a.48.48 0 0 0-.105.305.492.492 0 0 0 .909.286l1.647-2.13 1.829 1.434a.493.493 0 0 0 .703-.088Z"
      fill="currentColor"
    />
    <circle opacity={0.4} cx={13} cy={3} fill="currentColor" r={1.667} />
  </svg>
);
const Memo = memo(SvgAnalyticsIcon);
export default Memo;

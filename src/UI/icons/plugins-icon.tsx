import * as React from "react";
import { SVGProps, memo } from "react";
const SvgPluginsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    className="plugins-icon_svg__icon-20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    {...props}
  >
    <path
      opacity={0.4}
      d="M12.086 22a.781.781 0 0 1-.359-.086L8.126 20.05c-1.022-.53-1.821-1.124-2.445-1.816a8.243 8.243 0 0 1-2.139-5.474L3.5 6.124a1.813 1.813 0 0 1 1.228-1.712l6.613-2.305c.392-.14.83-.142 1.23-.007l6.637 2.227c.743.248 1.245.93 1.25 1.695l.042 6.64a8.243 8.243 0 0 1-2.066 5.496c-.617.702-1.41 1.305-2.421 1.845l-3.57 1.906a.765.765 0 0 1-.357.091Z"
      fill="currentColor"
    />
    <path
      d="M11.32 14.32a.763.763 0 0 1-.536-.21l-1.917-1.844a.722.722 0 0 1-.006-1.04.77.77 0 0 1 1.068-.007l1.38 1.326 3.367-3.32a.77.77 0 0 1 1.068-.007c.297.286.3.752.007 1.04l-3.9 3.844a.76.76 0 0 1-.532.219Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgPluginsIcon);
export default Memo;

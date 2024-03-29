import * as React from "react";
import { SVGProps, memo } from "react";
const SvgNotificationDropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="notification-drop-icon_svg__icon-24"
    width="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    {...props}
  >
    <path
      d="M19.77 11.645c-.731-.853-1.063-1.592-1.063-2.848V8.37c0-1.636-.377-2.69-1.195-3.745C16.248 2.987 14.124 2 12.044 2h-.088c-2.037 0-4.095.942-5.379 2.513-.864 1.075-1.284 2.175-1.284 3.857v.427c0 1.256-.31 1.995-1.063 2.848-.553.629-.73 1.437-.73 2.31 0 .876.287 1.705.864 2.379a4.532 4.532 0 0 0 2.9 1.413c1.571.179 3.142.246 4.737.246 1.593 0 3.164-.112 4.736-.246a4.532 4.532 0 0 0 2.9-1.413 3.614 3.614 0 0 0 .863-2.378c0-.874-.177-1.682-.73-2.31Z"
      fill="currentColor"
    />
    <path
      opacity={0.4}
      d="M14.009 19.228c-.5-.107-3.546-.107-4.046 0-.428.099-.89.329-.89.832.025.48.306.905.696 1.174h-.001a3.636 3.636 0 0 0 1.714.733c.33.045.666.043 1.008 0 .618-.09 1.21-.34 1.714-.732l-.001-.002c.39-.268.67-.692.695-1.173 0-.503-.462-.733-.89-.832Z"
      fill="currentColor"
    />
  </svg>
);
const Memo = memo(SvgNotificationDropIcon);
export default Memo;

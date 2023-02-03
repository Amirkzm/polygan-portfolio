import React from "react";
import theme from "../../utils/theme";

const Npm = () => {
  return (
    <svg viewBox="0 0 780 250" width={30} height={30}>
      <title>NPM</title>
      <path
        fill={theme.palette.primary.main}
        stroke={theme.palette.primary.main}
        d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
      ></path>
    </svg>
  );
};

export default Npm;

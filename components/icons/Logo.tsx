import { Box, useTheme } from "@mui/material";
import * as React from "react";
import styles from "./Logo.module.css";
import { motion } from "framer-motion";

const SvgComponent = ({ color }: { color: string }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -5, translateY: -20 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 -2 25 25"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{ cursor: "pointer" }}
        className={styles.svgLogo}
      >
        <title>Logo</title>
        <path
          id="p1"
          stroke={color}
          strokeWidth={1}
          fillRule="evenodd"
          d="M6.834.33a2.25 2.25 0 0 1 2.332 0l5.25 3.182A2.25 2.25 0 0 1 15.5 5.436v5.128a2.25 2.25 0 0 1-1.084 1.924l-5.25 3.182a2.25 2.25 0 0 1-2.332 0l-5.25-3.182A2.25 2.25 0 0 1 .5 10.564V5.436a2.25 2.25 0 0 1 1.084-1.924L6.834.33zm1.555 1.283a.75.75 0 0 0-.778 0l-5.25 3.181A.75.75 0 0 0 2 5.436v5.128a.75.75 0 0 0 .361.642l5.25 3.181a.75.75 0 0 0 .778 0l5.25-3.181a.75.75 0 0 0 .361-.642V5.436a.75.75 0 0 0-.361-.642l-5.25-3.181z"
          clipRule="evenodd"
          transform={"scale(1.4)"}
        />
        <polygon
          points="46 14,32 24,32 38,46 46,61 38,61 24"
          transform="translate(-12,-4) scale(0.5)"
        />
        <text
          stroke={color}
          strokeWidth="1"
          fill={theme.palette.background.paper}
          x="14"
          y="14"
          dominantBaseline="middle"
          textAnchor="middle"
          transform={"scale(0.8)"}
        >
          A
        </text>
      </svg>
    </motion.div>
  );
};

export default SvgComponent;

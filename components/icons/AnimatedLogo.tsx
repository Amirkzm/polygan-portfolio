import { Box } from "@mui/material";
import theme from "../../utils/theme";
import { motion } from "framer-motion";

function AnimatedLogo({ toggle }: { toggle: boolean }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        zIndex: 10,
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: "visible",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "95px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.path
          stroke="#4ADE80"
          strokeWidth="1"
          transform={"translate(10,10) scale(5)"}
          fill={theme.palette.background.paper}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3 }}
          d="M6.834.33a2.25 2.25 0 0 1 2.332 0l5.25 3.182A2.25 2.25 0 0 1 15.5 5.436v5.128a2.25 2.25 0 0 1-1.084 1.924l-5.25 3.182a2.25 2.25 0 0 1-2.332 0l-5.25-3.182A2.25 2.25 0 0 1 .5 10.564V5.436a2.25 2.25 0 0 1 1.084-1.924L6.834.33zm1.555 1.283a.75.75 0 0 0-.778 0l-5.25 3.181A.75.75 0 0 0 2 5.436v5.128a.75.75 0 0 0 .361.642l5.25 3.181a.75.75 0 0 0 .778 0l5.25-3.181a.75.75 0 0 0 .361-.642V5.436a.75.75 0 0 0-.361-.642l-5.25-3.181z"
        />
        <motion.path
          stroke="#4ADE80"
          strokeWidth="3"
          transform={"translate(35,30) scale(0.5)"}
          fill={theme.palette.background.paper}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 2.5, delay: 1 }}
          d="M 38.77 58.594 L 59.863 58.594 A 4.438 4.438 0 0 0 59.789 57.743 Q 59.698 57.28 59.497 56.948 A 1.689 1.689 0 0 0 58.301 56.152 Q 57.813 56.055 57.324 56.055 L 54.004 56.055 L 31.641 0 L 28.027 0 L 6.152 56.055 L 0 56.055 L 0 58.594 L 17.383 58.594 A 4.438 4.438 0 0 0 17.308 57.743 Q 17.217 57.28 17.016 56.948 A 1.689 1.689 0 0 0 15.82 56.152 Q 15.332 56.055 14.844 56.055 L 10.059 56.055 L 17.383 37.109 L 37.793 37.109 L 45.117 56.055 L 38.77 56.055 L 38.77 58.594 Z M 27.539 10.645 L 36.719 34.277 L 18.457 34.277 L 27.539 10.645 Z"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </Box>
  );
}

export default AnimatedLogo;

import { motion } from "framer-motion";
import theme from "../../utils/theme";

const LinkedIn = ({
  hoverEffect = true,
  width,
  height,
}: {
  hoverEffect?: boolean;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="6 0 1 32"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform=" translateY(0) scale(1)"
      whileHover={{
        stroke:
          hoverEffect === true ? theme.palette.primary.main : "currentColor",
        cursor: "pointer",
        transform: hoverEffect === true ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <title>Linkedin</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </motion.svg>
  );
};

export default LinkedIn;

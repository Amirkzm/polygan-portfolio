import { motion } from "framer-motion";
import theme from "../../utils/theme";

const Instagram = ({
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
      transform="translateY(0) scale(1)"
      whileHover={{
        stroke:
          hoverEffect === true ? theme.palette.primary.main : "currentColor",
        cursor: "pointer",
        transform: hoverEffect === true ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <title>Instagram</title>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </motion.svg>
  );
};

export default Instagram;

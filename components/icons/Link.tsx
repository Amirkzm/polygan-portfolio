import { motion } from "framer-motion";
import theme from "../../utils/theme";

const Link = ({
  hoverEffect = true,
  width = 20,
  height = 20,
}: {
  hoverEffect?: boolean;
  width?: number;
  height?: number;
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
      fill="white"
      stroke={theme.palette.background.default}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translateY(0) scale(1)"
      whileHover={{
        fill:
          hoverEffect === true
            ? theme.palette.primary.main
            : theme.palette.background.default,
        cursor: "pointer",
        transform: hoverEffect === true ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <title>Link</title>
      <path d="M960 704c-35.346 0-64 28.654-64 64v64c0 35.346-28.654 64-64 64H192c-35.346 0-64-28.654-64-64V192c0-35.346 28.654-64 64-64h64c35.346 0 64-28.654 64-64S291.346 0 256 0h-64C85.961 0 0 85.961 0 192v640c0 106.039 85.961 192 192 192h640c106.039 0 192-85.961 192-192v-64c0-35.346-28.654-64-64-64z" />
      <path d="M1023.876 51.52c0-1.92 0-3.84-1.6-5.44a63.957 63.957 0 00-1.92-6.4 63.973 63.973 0 00-3.2-6.4s0-3.2-2.56-4.8a63.989 63.989 0 00-17.6-17.6L991.876 8l-6.08-3.2-6.72-1.92h-5.44A64.028 64.028 0 00959.876 0h-384c-35.346 0-64 28.654-64 64s28.654 64 64 64h229.44l-370.56 370.88c-25.007 25.007-25.007 65.553 0 90.56s65.553 25.007 90.56 0l370.56-370.88V448c0 35.346 28.654 64 64 64s64-28.654 64-64V64c.407-4.15.407-8.33 0-12.48z" />
    </motion.svg>
  );
};

export default Link;

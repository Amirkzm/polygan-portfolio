import { createTheme } from "@mui/material";
import { Oswald, Raleway } from "@next/font/google";

export const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Raleway", "Helvetica", "Arial", "sans-serif"],
});

// declare module "@mui/material/styles/createPalette" {
//   // interface background extends TypeBackground{
//   //   kirekhar:string
//   // }

//   interface Palette {
//     kosesag: { main: string };
//   }

//   interface PaletteOptions {
//     kosesag?: { main: string };
//   }

//   interface TypeBackground {
//     kirekhar?: string;
//   }
// }

// interface CustomTheme {
//   palette?: {
//     background?: {
//       kirekhar?: string;
//     };
//   };

//   bg?: {
//     main?: string;
//     light?: string;
//   };
//   text?: {
//     main?: string;
//     light?: string;
//   };
// }

// declare module "@mui/material/styles" {
//   interface Theme extends CustomTheme {}
//   interface ThemeOptions extends CustomTheme {}
// }

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64ffda",
      contrastText: "#282828",
    },
    background: {
      paper: "#0a192f",
      default: "#ffffff",
    },
    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },
  },
  typography: {
    fontSize: 14,
    smallFontSize: 12,
    fontFamily: oswald.style.fontFamily,
  },
  shape: {
    borderRadius: 8,
  },
});

theme.typography.body1 = {
  ...theme.typography,
  fontSize: "clamp(14px,5vw,16px)",
  lineHeight: 1.3,
  [theme.breakpoints.up("md")]: { fontSize: "clamp(16px,5vw,18px)" },
};

theme.typography.h1 = {
  ...theme.typography,
  fontSize: "clamp(19px,5vw,21px)",
  fontWeight: "700",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("md")]: { fontSize: "clamp(30px,5vw,34px)" },
};

theme.typography.h2 = {
  ...theme.typography,
  fontSize: "clamp(17px,5vw,19px)",
  fontWeight: "600",
  [theme.breakpoints.up("md")]: { fontSize: "clamp(26px,5vw,30px)" },
};

theme.typography.h3 = {
  ...theme.typography,
  fontSize: "clamp(16px,5vw,18px)",
  fontWeight: "400",
  [theme.breakpoints.up("md")]: { fontSize: "clamp(23px,5vw,26px)" },
};

export default theme;

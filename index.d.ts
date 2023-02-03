import "@mui/material/styles";
import "@mui/material/Typography";

declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    smallFontSize: number;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    smallFontSize?: number;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    smallFontSize: true;
  }
}

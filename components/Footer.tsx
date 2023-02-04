import { Box, Link as MuiLink } from "@mui/material";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import { SOCIAL_ADDRESS } from "../utils/data";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        marginBottom: "0px",
        minHeight: "10vh",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          gap: 4,
        }}
      >
        <MuiLink href={SOCIAL_ADDRESS.instagram} target={"_blank"}>
          <Instagram />
        </MuiLink>
        <MuiLink href={SOCIAL_ADDRESS.twitter} target={"_blank"}>
          <Twitter />
        </MuiLink>
        <MuiLink href={SOCIAL_ADDRESS.linkedin} target={"_blank"}>
          <LinkedIn />
        </MuiLink>
        <MuiLink href={SOCIAL_ADDRESS.github} target={"_blank"}>
          <Github />
        </MuiLink>
      </Box>
      <MuiLink
        href={`${SOCIAL_ADDRESS.github}/polygan-portfolio`}
        target="_blank"
        sx={{
          fontWeight: 100,
          fontSize: 18,
          letterSpacing: 0.1,
          fontFamily: "Playfair Display",
          color: "text.secondary",
          textDecoration: "none",
          "&:hover": { color: "primary.main", cursor: "pointer" },
        }}
      >
        Designed and developed by Amir Kazemi
      </MuiLink>
    </Box>
  );
};

export default Footer;

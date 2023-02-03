import { Box, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";
import Github from "./icons/Github";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import { SOCIAL_ADDRESS } from "../utils/data";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40px",
  bottom: 0,
  left: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LeftBorder = () => {
  return (
    <StyledBox>
      <Box>
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
      <Box
        sx={{
          width: "2px",
          height: "120px",
          backgroundColor: "primary.main",
          margin: "0 auto",
        }}
      ></Box>
    </StyledBox>
  );
};

export default LeftBorder;

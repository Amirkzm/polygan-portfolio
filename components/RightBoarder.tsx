import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40px",
  bottom: 0,
  right: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  // transform: "rotate(90deg)",
  rotate: "90deg",
  marginBottom: "11rem",
  transition: "transform 0.5s",
  "&:hover": {
    color: theme.palette.primary.main,
    cursor: "pointer",
    transform: "translateX(-3px)",
  },
}));

const RightBoarder = () => {
  return (
    <StyledBox sx={{}}>
      <StyledTypography>amirkazemi@gmail.com</StyledTypography>
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

export default RightBoarder;

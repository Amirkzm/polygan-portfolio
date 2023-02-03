import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import SectionContainer from "../Container/SectionContainer";
import profilePic from "../../public/images/profile.jpg";
import { motion, Variants } from "framer-motion";

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: "900px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  "&::before": {
    content: '""',
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "3%",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "20px",
    left: "20px",
    zIndex: -1,
    transition: "all 0.3s",
  },
  "&:hover": {
    "&::before": {
      top: "10px",
      left: "10px",
    },
    "&:after": {
      opacity: 0,
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    opacity: 0.2,
    zIndex: 10,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  minWidth: "max-content",
  "&::before": {
    content: '"▹"',
    position: "relative",
    display: "inline",
    top: 0,
    left: 0,
    marginRight: "10px",
    color: theme.palette.primary.main,
    width: "5px",
    height: "5px",
  },
}));

const parentVariant: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const skillItemAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <SectionContainer id="About">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "end", gap: 8 },
          transition: "all",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <StyledBox>
          <Box sx={{ width: "100%", overflow: "hidden", mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "clamp(26px,5vw,32px)",
                display: "inline",
                "&::after": {
                  content: "''",
                  position: "relative",
                  display: { xs: "none", sm: "block" },
                  top: "-15px",
                  left: "220px",
                  marginRight: "50%",
                  bgcolor: "#233554",
                  height: "2px",
                  width: "100%",
                },
              }}
            >
              <Box component={"span"} sx={{ color: "primary.main" }}>
                01.
              </Box>
              About Me
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Hello! My name is Amir and I enjoy creating things that live on the
            internet. My interest in web development started back in 2017 when I
            decided to devolope simple online quiz app in my free time for a
            non-profite organization. I started learning Django and after
            finishing some small-size projects, I Developed a complete Rest API
            for Shiraz University Game festival with Django Rest Framework.
            <br></br>
            <br></br>
            Back in mid 2020, I got familiar with a React JS and the world of
            javascript front-end technologies. It seemed quit enchanting and I
            started learning React. In 2021 I started to work at Mehr Gostaer
            company as React front-end developer.
            <br></br>
            <br></br>I enjoy coding, and working as a team member and arguing
            and challenging the consepts on the table till we find the best
            solution.
            <br></br>
            <br></br>
            here a list of some technologies that I've been working with
            recently:
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 1,
              gridTemplateColumns: {
                xs: "repeat(auto-fill, 0.2fr)",
                sm: "repeat(2, 0.2fr)",
              },
              columnGap: 10,
              mt: "5%",
              justifyContent: "center",
            }}
            component={motion.div}
            variants={parentVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.span
              variants={skillItemAnimation}
              transition={{ delay: 0.1 }}
            >
              <StyledTypography>Javascript</StyledTypography>
            </motion.span>
            <motion.span variants={skillItemAnimation}>
              <StyledTypography>Typescript</StyledTypography>
            </motion.span>
            <motion.span variants={skillItemAnimation}>
              <StyledTypography>React</StyledTypography>
            </motion.span>
            <motion.span variants={skillItemAnimation}>
              <StyledTypography>Next.js</StyledTypography>
            </motion.span>
            <motion.span variants={skillItemAnimation}>
              <StyledTypography>Redux and Redux Toolkit</StyledTypography>
            </motion.span>
            <motion.span variants={skillItemAnimation}>
              <StyledTypography>Rollup and webpack</StyledTypography>
            </motion.span>
          </Box>
        </StyledBox>
        <Box
          sx={{
            position: "relative",
            alignSelf: { md: "start" },
            transform: { md: "translateY(40px)" },
            ml: { md: 4 },
          }}
        >
          <ImageWrapper>
            <Image
              src={profilePic}
              alt="Picture of the author"
              style={{
                borderRadius: "3%",
                maxWidth: "300px",
                maxHeight: "300px",
                width: "80vw",
                height: "80vw",
              }}
            />
          </ImageWrapper>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default About;

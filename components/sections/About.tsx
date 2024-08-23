import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import SectionContainer from "../Container/SectionContainer";
import profilePic from "../../public/assets/avatar/profile.jpg";
import { motion, Variants } from "framer-motion";
import { briefSkills } from "@/utils/data";

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
            I am a passionate Full-Stack Web Developer with a strong focus on
            delivering high-performance, scalable, and user-friendly
            applications. With experience in both frontend and backend
            development, I specialize in modern frameworks like Next.js and
            React, as well as robust backend solutions using Django and Node.js.
            My expertise includes creating RESTful APIs, implementing secure
            authentication and authorization systems, and optimizing web
            applications for speed and SEO. I am committed to writing clean,
            maintainable code and enjoy tackling complex problems to deliver
            seamless digital experiences.
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
            {briefSkills.map((item, index) => (
              <motion.span key={index} variants={skillItemAnimation}>
                <StyledTypography>{item}</StyledTypography>
              </motion.span>
            ))}
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
                maxWidth: "250px",
                maxHeight: "250px",
              }}
              width={250}
              height={250}
            />
          </ImageWrapper>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default About;

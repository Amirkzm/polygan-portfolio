import { Box, Button, Typography, Link as MuiLink } from "@mui/material";
import SectionContainer from "../Container/SectionContainer";
import { motion, Variants } from "framer-motion";

const parentVariant: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariant: Variants = {
  initial: { opacity: 0, x: 0, y: 20 },
  whileInView: { opacity: 1, x: 0, y: 0 },
};

const Contact = () => {
  return (
    <SectionContainer id="Contact">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
        component={motion.div}
        variants={parentVariant}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false }}
      >
        <Box component={motion.span} variants={childrenVariant}>
          <Typography variant="body1" sx={{ color: "primary.main" }}>
            04.Whats Next
          </Typography>
        </Box>
        <Box component={motion.span} variants={childrenVariant}>
          <Typography variant="h2" sx={{ fontSize: "clamp(40px,5vw,45px)" }}>
            Get In Touch
          </Typography>
        </Box>
        <Box
          component={motion.div}
          variants={childrenVariant}
          sx={{ display: "flex", justifyContent: "center" }}
          layout
        >
          <Typography
            variant="body1"
            sx={{ maxWidth: { md: "60%" }, textAlign: "center" }}
          >
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Typography>
        </Box>
        <Box component={motion.span} variants={childrenVariant}>
          <MuiLink
            href="mailto:kazemi.amir68@gmail.com"
            sx={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 5, width: "170px", height: "60px" }}
            >
              Say Hello
            </Button>
          </MuiLink>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Contact;

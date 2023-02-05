import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "../Container/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer id="#Hero">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <motion.span
          initial={{ opacity: 0, translateX: -2, translateY: -10 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <Typography
            sx={{ color: "primary.main", mb: "1rem" }}
            variant="body1"
            gutterBottom
          >
            Hi, my name is
          </Typography>
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: -2, translateY: -10 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "clamp(50px,8vw,80px)" },
              fontWeight: 700,
              lineHeight: "1.3",
              fontFamily: "Abril Fatface",
            }}
          >
            Amir Kazemi
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: -2, translateY: -10 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "clamp(40px,7vw,70px)" },
              fontWeight: 500,
              fontFamily: "Abril Fatface",
            }}
          >
            I build things for web.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateX: -2, translateY: -10 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <Typography
            sx={{
              color: "text.secondary",
              width: "80%",
              p: "10px 0",
              fontFamily: "Raleway",
            }}
            variant="h3"
          >
            I'm a UI/UX designer and developer Specializing in building and
            developing modern responsive websites using{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              React JS
            </Box>
            .
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -2, translateY: -10 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          <Link href="/resume">
            <Button
              variant="outlined"
              sx={{
                width: { xs: "70vw", sm: "280px" },
                height: "50px",
                mt: "10%",
                display: "inline-block",
                fontSize: "clamp(19px,5vw,21px)",
              }}
            >
              show resume
            </Button>
          </Link>
        </motion.div>
      </Box>
    </SectionContainer>
  );
};

export default Hero;

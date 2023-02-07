import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  useTheme,
  Link as MuiLink,
  ListItem,
} from "@mui/material";
import Logo from "./icons/Logo";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const theme = useTheme();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  const linksSX = {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  };

  const linksContent = ["Home", "About", "Experience", "Work", "Contact"];

  const underlineMotion = {
    rest: {
      width: "100%",
      height: "2px",
      backgroundColor: theme.palette.primary.main,
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      transform: "scaleX(1)",
      transformOrigin: "left",
      color: theme.palette.primary.main,
      transition: {
        duration: 0.3,
      },
    },
  };

  const list = () => (
    <Box
      sx={{
        width: "70vw",
        height: "100vh",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(false)}
        sx={{
          alignSelf: "start",
          transform: "translateY(15px)",
        }}
      >
        <CloseIcon
          sx={{
            color: "primary.main",
            bgColor: "white",
          }}
          component={motion.svg}
          fontSize="large"
          initial={{ y: -40 }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 300,
          }}
        />
      </IconButton>
      <List sx={{ mt: "30%" }}>
        {linksContent.map((text, index) => (
          <ListItem
            key={text}
            component={motion.li}
            initial="rest"
            whileHover="hover"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:hover *": {
                color: "primary.main",
              },
            }}
          >
            <Box
              component={Link}
              sx={{
                color: "primary.main",
                cursor: "pointer",
                fontSize: "small",
                textDecoration: "none",
              }}
              href={`#${text}`}
            >
              0{index + 1}.
            </Box>
            <Box
              sx={{
                position: "relative",
                mb: 4,
                "&:hover *": { color: "primary.main" },
              }}
            >
              <Link
                href={`/#${text}`}
                style={{
                  color: "text.primary",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontFamily: "oswald",
                }}
              >
                <Typography component={"span"} sx={{ color: "text.primary" }}>
                  {text}
                </Typography>
              </Link>

              <Box
                component={motion.span}
                variants={underlineMotion}
                sx={{ position: "absolute", top: 25, left: 0 }}
              ></Box>
            </Box>

            {/* <Box
              sx={{
                position: "relative",
                mb: 7,
                "&:hover *": { color: "primary.main" },
              }}
            >
              <Link
                href={`#${text}`}
                // component={motion.a}
                // variants={linkMotion}
                style={{
                  marginBottom: 7,
                  color: "text.primary",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontFamily: "oswald",
                }}
              >
                <Typography component={"span"} sx={{ color: "text.primary" }}>
                  {text}
                </Typography>
              </Link>

              <Box
                component={motion.span}
                variants={underlineMotion}
                sx={{ position: "absolute", top: 25, left: 0 }}
              ></Box>
            </Box> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.section>
      <AppBar
        sx={{
          height: "72px",
          position: "fixed",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MuiLink href="/" sx={{ pt: 1 }}>
            <Logo color={theme.palette.primary.main} />
          </MuiLink>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {linksContent.map((item, index) => {
              return (
                <Box
                  sx={{ "&:hover *": { color: "primary.main" } }}
                  component={motion.div}
                  initial={{ opacity: 0, translateX: -2, translateY: -10 }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.2, delay: (index + 1) * 0.1 }}
                  key={index}
                >
                  <Link
                    href={`/#${item}`}
                    scroll={false}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      component={"span"}
                      sx={{ color: theme.palette.primary.main }}
                      variant={"body1"}
                    >
                      0{index + 1}.
                    </Typography>
                    <Typography component={"span"} sx={linksSX}>
                      {item}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: { sm: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={openDrawer}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.section>
  );
};
Header.displayName = "MyApp";

export default Header;

import { CssBaseline, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Header from "./Header";
import Hero from "./sections/Hero";
import RightBoarder from "./RightBoarder";
import LeftBorder from "./LeftBorder";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import ProjectLists from "./sections/projects/ProjectLists";
import Contact from "./sections/Contact";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Container>
        {
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Header />

            <Box sx={{}}>
              <Grid container spacing={3} direction="row">
                <Grid item xs={0} md={1}>
                  <LeftBorder />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={10}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10%",
                  }}
                >
                  <Hero />
                  <About />
                  <Experiences />
                  <ProjectLists />
                  <Contact />
                  <Footer />
                </Grid>
                <Grid item xs={0} md={1}>
                  <RightBoarder />
                </Grid>
              </Grid>
            </Box>
          </Box>
        }
        {children}
      </Container>
    </>
  );
};

export default Layout;

import {
  CssBaseline,
  List,
  ListItemText,
  Paper,
  styled,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Github from "../components/icons/Github";
import LinkedIn from "../components/icons/LinkedIn";
import SkillItem from "../components/SkillItem";
import { SKILLS_LIST, SOCIAL_ADDRESS, WORK_EXPERIENCE } from "../utils/data";
import Head from "next/head";
import { useContext } from "react";
import LoadingContext from "../context/LoadingContext";
import PathContainer from "../components/Container/PathContainer";

const Divider = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.text.secondary,
  height: "2px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const StyledListItem = styled("li")(({ theme }) => ({
  position: "relative",
  color: theme.palette.text.secondary,
  "&::before": {
    content: '"▹"',
    position: "absolute",
    display: "inline",
    top: 0,
    left: 22,
    marginRight: "10px",
    color: theme.palette.primary.main,
    width: "5px",
    height: "5px",
  },
}));
const Resume = () => {
  const loadingCtx = useContext(LoadingContext);
  console.log(loadingCtx.isLoading);
  return (
    <PathContainer>
      <Head>
        <title>Amir Kazemi Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Amir Kazemi built with react and next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <CssBaseline />
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: "100px 10px",
          minHeight: "100vh",
          gap: 5,
        }}
      >
        <Typography variant="h1" fontFamily="Abril Fatface">
          Resume
        </Typography>
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            p: "10px 15px",
          }}
        >
          <Typography
            variant="body1"
            fontFamily="Abril Fatface"
            fontWeight="600"
          >
            Amir Kazemi
          </Typography>
          <Box sx={{ display: "flex" }}>
            <MuiLink href={SOCIAL_ADDRESS.github} target={"_blank"}>
              <Github hoverEffect={false} />
            </MuiLink>
            <MuiLink href={SOCIAL_ADDRESS.linkedin} target={"_blank"}>
              <LinkedIn hoverEffect={false} />
            </MuiLink>
          </Box>
        </Paper>
        <Divider />
        <Box
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <Typography variant="h2" textAlign={"center"}>
            Skills
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 5,
              flexWrap: "wrap",
            }}
          >
            {SKILLS_LIST.map((skill) => {
              return (
                <SkillItem
                  key={skill.id}
                  imageSrc={skill.imgSrc}
                  skillName={skill.skillName}
                />
              );
            })}
          </Box>
        </Box>
        <Divider />
        <Box
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Typography variant="h2" textAlign={"center"}>
            Work Experience
          </Typography>
          {WORK_EXPERIENCE.map((work) => (
            <Box
              key={work.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3">{work.title}</Typography>
                <Typography variant="caption">{work.date}</Typography>
              </Box>
              <List>
                {work.description?.map((desc, index) => (
                  <StyledListItem key={index}>
                    <ListItemText inset>{desc}</ListItemText>
                  </StyledListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
        <Divider />
        <Box
          component={"section"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            gap: 2,
          }}
        >
          <Typography variant="h2" textAlign={"center"}>
            Educations
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">
                Master Strategy Engineering At University of Genoa,Italy
              </Typography>
              <Typography variant="caption">2022-Present</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">
                Bachelor of Computer Science At Shiraz University,Iran
              </Typography>
              <Typography variant="caption">2012-2017</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </PathContainer>
  );
};

export default Resume;

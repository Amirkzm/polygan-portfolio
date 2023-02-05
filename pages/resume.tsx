import {
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Github from "../components/icons/Github";
import LinkedIn from "../components/icons/LinkedIn";
import SkillItem from "../components/SkillItem";
import { SKILLS_LIST } from "../utils/data";

const Divider = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.text.secondary,
  height: "2px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const StyledListItem = styled("li")(({ theme }) => ({
  "&::before": {
    content: '"▹"',
    position: "absolute",
    display: "inline",
    top: 0,
    left: 0,
    marginRight: "10px",
    color: theme.palette.primary.main,
    width: "5px",
    height: "5px",
  },
}));
const resume = () => {
  return (
    <>
      <CssBaseline />
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: "50px 10px",
          minHeight: "100vh",
          gap: 5,
        }}
      >
        <Typography variant="h1">Resume</Typography>
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            p: "10px 15px",
          }}
        >
          <Typography variant="body1" fontFamily={"Raleway"}>
            Amir Kazemi
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Github hoverEffect={false} />
            <LinkedIn hoverEffect={false} />
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
            Work Experience
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
              <Typography variant="h2">
                Front End Web Developer At Mehrpars Co
              </Typography>
              <Typography variant="caption">2021-2022</Typography>
            </Box>
            <List sx={{ display: "list-item" }}>
              <StyledListItem sx={{}}>
                <ListItemText>
                  Develope some react packages including hooks and components
                  like auto-complete and infinite-scroll-loader.The main purpose
                  was to use components with built-in ability of handling server
                  responses.They have been developed in order to help other
                  developers of company and also have been used in other
                  projects as well.
                </ListItemText>
              </StyledListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default resume;

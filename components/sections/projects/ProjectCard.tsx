import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Folder from "../../icons/Folder";
import { Link as MuiLink, styled } from "@mui/material";
import Github from "../../icons/Github";
import Npm from "../../icons/Npm";

interface ProjectCardProps {
  children?: React.ReactNode;
  projectTitle: string;
  projectDescription: string;
  npmLink?: string;
  githubLink?: string;
  projectTechList: string[];
}

interface CardItemProps {
  children?: React.ReactNode;
  projectTitle: string;
  projectDescription: string;
  npmLink?: string;
  githubLink?: string;
  projectTechList: string[];
  isHovered: boolean;
}

const CardWrapper = styled(Card)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#112240",
  minHeight: "300px",
  transition: "all 0.3s",
  "&:hover": { cursor: "pointer", transform: "translateY(-7px)" },
}));

const CardItem = (props: CardItemProps) => {
  const {
    projectTitle,
    projectDescription,
    projectTechList,
    isHovered,
    npmLink,
    githubLink,
    ...other
  } = props;

  return (
    <React.Fragment>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          height: "100%",
          padding: "10px 10px 25px 10px",
          position: "relative",
        }}
      >
        <header
          style={{
            alignSelf: "stretch",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Folder />
          <MuiLink
            href={githubLink}
            target="_blank"
            sx={{
              alignSelf: "center",
            }}
          >
            <Github hoverEffect={false} width={25} height={25} />
          </MuiLink>
        </header>
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: isHovered ? "primary.main" : "currentcolor",
            position: "absolute",
            top: "15%",
          }}
        >
          {projectTitle}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          {projectDescription}
        </Typography>
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            alignSelf: "normal",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "90%",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {projectTechList.map((item, index) => (
              <Typography variant="caption" key={index}>
                {item}
              </Typography>
            ))}
          </Box>
          {npmLink && (
            <MuiLink href={npmLink} target="_blank" sx={{ mt: 1 }}>
              <Npm />
            </MuiLink>
          )}
        </footer>
      </CardContent>
    </React.Fragment>
  );
};

const ProjectsCard = (props: ProjectCardProps) => {
  const {
    projectTitle,
    projectDescription,
    projectTechList,
    githubLink,
    npmLink,
    ...other
  } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <CardWrapper
      variant="outlined"
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      <CardItem
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        projectTechList={projectTechList}
        isHovered={isHovered}
        githubLink={githubLink}
        npmLink={npmLink}
      />
    </CardWrapper>
  );
};

export default ProjectsCard;

import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Folder from "../../icons/Folder";
import { Link as MuiLink, styled } from "@mui/material";
import { Github } from "@/components/icons";
import ProjectCardFooter from "./ProjectCardFooter";

interface ProjectCardProps {
  children?: React.ReactNode;
  projectTitle: string;
  projectDescription: string;
  npmLink?: string;
  githubLink?: string;
  projectTechList: string[];
  websiteLink?: string;
}

interface CardItemProps {
  children?: React.ReactNode;
  projectTitle: string;
  projectDescription: string;
  npmLink?: string;
  githubLink?: string;
  websiteLink?: string;
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
    websiteLink,
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
          minHeight: "300px",
          padding: "10px 10px 10px 10px",
          position: "relative",
          "&:last-child": {
            pb: 0,
          },
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Folder />
        </div>
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
        <ProjectCardFooter
          projectTechList={projectTechList}
          npmLink={npmLink}
          websiteLink={websiteLink}
          githubLink={githubLink}
        />
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
    websiteLink,
  } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <CardWrapper
      variant="outlined"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardItem
        projectTitle={projectTitle}
        projectDescription={projectDescription}
        projectTechList={projectTechList}
        isHovered={isHovered}
        githubLink={githubLink}
        npmLink={npmLink}
        websiteLink={websiteLink}
      />
    </CardWrapper>
  );
};

export default ProjectsCard;

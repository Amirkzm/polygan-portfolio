import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import Npm from "@/components/icons/Npm";
import { Github, Link } from "@/components/icons";

type ProjectCardFooterProps = {
  projectTechList: string[];
  npmLink?: string;
  githubLink?: string;
  websiteLink?: string;
};

const ProjectCardFooter: React.FC<ProjectCardFooterProps> = ({
  projectTechList,
  npmLink,
  githubLink,
  websiteLink,
}) => {
  return (
    <div
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {npmLink && (
          <MuiLink href={npmLink} target="_blank" sx={{ mt: 1 }}>
            <Npm />
          </MuiLink>
        )}
        {githubLink && (
          <MuiLink href={githubLink} target="_blank" sx={{ mt: 1 }}>
            <Github />
          </MuiLink>
        )}
        {websiteLink && (
          <MuiLink
            href={websiteLink}
            target="_blank"
            sx={{ mb: !npmLink && !githubLink ? 1 : 0 }}
          >
            <Link />
          </MuiLink>
        )}
      </Box>
    </div>
  );
};

export default ProjectCardFooter;

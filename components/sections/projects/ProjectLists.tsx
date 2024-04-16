import { Box, Typography } from "@mui/material";
import SectionContainer from "../../Container/SectionContainer";
import ProjectsCard from "./ProjectCard";
import { PROJECT_DATA } from "../../../utils/data";
import { motion } from "framer-motion";

const cardAnimation = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  hidden: { opacity: 0, x: 0, y: 20 },
};

const ProjectLists = () => {
  return (
    <SectionContainer id="Work">
      <Typography variant="h2" sx={{ textAlign: "center", my: 8 }}>
        Some of my projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1,1fr)", sm: "repeat(2,1fr)" },
          gap: "5%",
        }}
      >
        {PROJECT_DATA.map((item, index) => (
          <Box
            key={index}
            custom={index}
            component={motion.div}
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <ProjectsCard
              key={item.id}
              projectTitle={item.title}
              projectDescription={item.description}
              projectTechList={item.techList}
              githubLink={item.githubLink}
              npmLink={item.npmLink}
              websiteLink={item.websiteLink}
            />
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
};

export default ProjectLists;

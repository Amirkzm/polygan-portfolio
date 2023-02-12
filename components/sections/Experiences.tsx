import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import SectionContainer from "../Container/SectionContainer";
import { WORK_EXPERIENCE } from "../../utils/data";
import { motion, Variants } from "framer-motion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledList = styled("li")(({ theme }) => ({
  listStyle: "none",
  textAlign: "left",
  marginBottom: "10px",
  position: "relative",
  "&::before": {
    content: '"▹"',
    position: "absolute",
    top: 0,
    left: -30,
    marginRight: "10px",
    color: theme.palette.primary.main,
    width: "5px",
    height: "5px",
  },
}));

const parentVariant: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariant: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

const Experiences = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabIndex: number
  ) => {
    setTabIndex(newTabIndex);
  };
  return (
    <SectionContainer id="Experience">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ fontSize: "clamp(26px,5vw,32px)" }}>
          <Box
            component={"span"}
            sx={{
              color: "primary.main",
              lineHeight: "4",
            }}
          >
            02.
          </Box>
          Where I&apos;ve worked
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "flex-start",
            height: 224,
            position: "relative",
          }}
        >
          <Box>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="basic tabs example"
              orientation={isMobile ? "horizontal" : "vertical"}
              sx={{
                borderRight: isMobile ? 0 : 1,
                borderBottom: isMobile ? 1 : 0,
                borderColor: "divider",
              }}
            >
              <Tab label="Mehr gostar" {...a11yProps(0)} />
              <Tab label="Shiraz University" {...a11yProps(1)} />
              <Tab label="Freelance" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box
            sx={{
              position: isMobile ? "absolute" : "relative",
              top: isMobile ? 40 : 0,
              left: isMobile ? 40 : 20,
            }}
          >
            {WORK_EXPERIENCE.map((tab) => {
              return (
                <TabPanel key={tab.id} value={tabIndex} index={tab.id}>
                  <Box
                    component={motion.div}
                    variants={parentVariant}
                    initial="initial"
                    whileInView="whileInView"
                  >
                    <Typography
                      variant="h3"
                      fontWeight={400}
                      component={motion.h3}
                      variants={childrenVariant}
                    >
                      {tab.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ pb: 4, color: "text.secondary" }}
                      component={motion.span}
                      variants={childrenVariant}
                    >
                      {tab.date}
                    </Typography>

                    <Box
                      component={motion.div}
                      variants={childrenVariant}
                      sx={{ mt: 4 }}
                    >
                      <StyledList>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          {tab.partOneDesc}
                        </Typography>
                      </StyledList>
                    </Box>
                    <Box component={motion.div} variants={childrenVariant}>
                      <StyledList>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          {tab.partTwoDesc}
                        </Typography>
                      </StyledList>
                    </Box>
                    <Box component={motion.div} variants={childrenVariant}>
                      <StyledList>
                        <Typography
                          variant="body1"
                          sx={{ color: "text.secondary" }}
                        >
                          {tab.partThreeDesc}
                        </Typography>
                      </StyledList>
                    </Box>
                  </Box>
                </TabPanel>
              );
            })}
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Experiences;

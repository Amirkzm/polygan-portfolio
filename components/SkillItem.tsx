import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
type SkillItemProps = {
  imageSrc: string;
  skillName: string;
};

const SkillItem = (props: SkillItemProps) => {
  const { imageSrc, skillName } = props;

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "150px",
        padding: "20px 10px",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Image src={imageSrc} width="36" height="36" alt="/" />
      <Typography variant="body1" sx={{ alignSelf: "center" }}>
        {skillName}
      </Typography>
    </Paper>
  );
};

export default SkillItem;

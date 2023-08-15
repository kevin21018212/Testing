import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const EmployeeSkillsCard = ({employeeData}: any) => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          {employeeData.name}
        </Typography>
        {employeeData.skills.map((skill: any) => (
          <div key={skill.name}>
            <Typography variant='body2' gutterBottom>
              {skill.name}
            </Typography>
            <LinearProgress variant='determinate' value={skill.progress} sx={{marginBottom: 10}} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default EmployeeSkillsCard;

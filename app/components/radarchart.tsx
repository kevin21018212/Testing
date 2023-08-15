import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const EmployeeRadarChart = ({employeeData}: any) => {
  const centerX = 100;
  const centerY = 100;
  const maxSkillLevel = 100;
  //angle between each skill
  const angleBetween = (2 * Math.PI) / employeeData.skills.length;

  //generates the spiderweb for the radar chart, 1 ring for each skill
  const generateSpiderWeb = () => {
    const spiderWeb = [];
    for (let i = 1; i <= employeeData.skills.length; i++) {
      const radius = (i / employeeData.skills.length) * 60;
      const points = generateWebLinePoints(radius);
      spiderWeb.push(<polygon key={i} points={points.join(" ")} fill='none' stroke='rgba(0, 123, 255, 0.3)' strokeWidth='1' />);
    }
    return spiderWeb;
  };

  //generates the points for each skill ring 1 point for each skill
  const generateWebLinePoints = (radius: number) => {
    return employeeData.skills.map((_: any, i: number) => {
      const angle = i * angleBetween;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return `${x},${y}`;
    });
  };

  //generates the labels for each skill
  const generateSkillLabels = () => {
    return skillPoints.map((currPoint: any, i: number) => (
      <text key={i} x={currPoint.labelX} y={currPoint.labelY} fontSize='10' fill='black' dominantBaseline='middle' textAnchor={currPoint.labelX > centerX ? "start" : "end"}>
        {currPoint.skillName}
      </text>
    ));
  };

  const generateSkillLines = () => {
    return skillPoints.map((currPoint: any, i: number) => {
      return <line key={i} x1={centerX} y1={centerY} x2={currPoint.x} y2={currPoint.y} stroke='#023020' strokeWidth='2' />;
    });
  };

  //calculates location of each skill point based on skill level along with location of skill label
  const skillPoints = employeeData.skills.map((currSkill: any, i: number) => {
    const skillAngle = i * angleBetween;
    const radius = (currSkill.progress / maxSkillLevel) * 60;
    const x = centerX + radius * Math.cos(skillAngle);
    const y = centerY + radius * Math.sin(skillAngle);
    const labelX = x + 10 * Math.cos(skillAngle);
    const labelY = y + 10 * Math.sin(skillAngle);
    return {x, y, labelX, labelY, skillName: currSkill.name};
  });

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          {employeeData.name}'s Skills Spider Chart
        </Typography>
        <svg width={200} height={200}>
          {generateSpiderWeb()}
          {generateSkillLabels()}
          {generateSkillLines()}
          {/*Skills points and connecting polygons */}
          <polygon points={skillPoints.map((point: any) => `${point.x},${point.y}`).join(" ")} fill='rgba(0, 255, 0, 0.5)' stroke='green' strokeWidth='2' />
        </svg>
      </CardContent>
    </Card>
  );
};

export default EmployeeRadarChart;

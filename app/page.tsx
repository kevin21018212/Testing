import React, {cache, use} from "react";
import EmployeeSkillsCard from "./components/linearprogress";
import {Grid} from "@mui/material";
import EmployeeRadarChart from "./components/radarchart";
import employeeData from "./data.js";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: 'url("/path-to-john-deere-background.jpg")',
  backgroundSize: "cover",
};

const cardGridStyle = {
  maxWidth: 1200,
  padding: 20,
};

export default async function Home() {
  return (
    <div style={containerStyle}>
      <Grid container spacing={3} style={cardGridStyle}>
        {employeeData.map((employee) => (
          <Grid key={employee.id} item xs={12} sm={6} md={4} lg={3}>
            <EmployeeRadarChart employeeData={employee} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

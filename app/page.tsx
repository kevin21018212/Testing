import React, {cache, use} from "react";
import prisma from "@/lib/prisma";
import {GetStaticProps} from "next";

import EmployeeSkillsCard from "./components/linearprogress";
import {makeStyles, Grid} from "@mui/material";
import EmployeeRadarChart from "./components/radarchart";

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

const employeeData = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    department: "Engineering",
    skills: [
      {name: "Coding", progress: 80},
      {name: "Design", progress: 60},
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    department: "Design",
    skills: [
      {name: "UI Design", progress: 70},
      {name: "User Research", progress: 85},
      {name: "Prototyping", progress: 75},
    ],
  },
  // Add more employees with different skill counts and progress levels
  {
    id: 3,
    name: "Michael Johnson",
    role: "Marketing Manager",
    department: "Marketing",
    skills: [
      {name: "Campaign Strategy", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 85},
      {name: "Machine Learning", progress: 70},
      {name: "Statistics", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 90},
      {name: "Campaign Strategy", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 85},
      {name: "Machine Learning", progress: 70},
      {name: "Statistics", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 90},
      {name: "Campaign Strategy", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 85},
      {name: "Machine Learning", progress: 70},
      {name: "Statistics", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 90},
      {name: "Campaign Strategy", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 85},
      {name: "Machine Learning", progress: 70},
      {name: "Statistics", progress: 75},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
      {name: "Data Analysis", progress: 90},
    ],
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Data Scientist",
    department: "Data Science",
    skills: [
      {name: "Data Analysis", progress: 85},
      {name: "Machine Learning", progress: 70},
      {name: "Statistics", progress: 75},
      {name: "Data Visualization", progress: 60},
    ],
  },
];

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

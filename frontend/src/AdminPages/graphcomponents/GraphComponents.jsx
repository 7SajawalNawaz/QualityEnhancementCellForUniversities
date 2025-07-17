import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";

const FacultyGraph = () => {
  const [chartHeight, setChartHeight] = useState(window.innerWidth <= 768 ? 200 : 300);

  const updateChartHeight = () => {
    setChartHeight(window.innerWidth <= 768 ? 200 : 300);
  };

  useEffect(() => {
    window.addEventListener("resize", updateChartHeight);
    return () => {
      window.removeEventListener("resize", updateChartHeight);
    };
  }, []);

  const data = [
    { name: "2020", count: 10 },
    { name: "2021", count: 15 },
    { name: "2022", count: 20 },
    { name: "2023", count: 25 },
  ];

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const PhDGraph = () => {
  const [chartHeight, setChartHeight] = useState(window.innerWidth <= 768 ? 200 : 300);

  const updateChartHeight = () => {
    setChartHeight(window.innerWidth <= 768 ? 200 : 300);
  };

  useEffect(() => {
    window.addEventListener("resize", updateChartHeight);
    return () => {
      window.removeEventListener("resize", updateChartHeight);
    };
  }, []);

  const data = [
    { name: "2024", value: 5 },
    { name: "2025", value: 1 },
    { name: "2026", value: 15 },
    { name: "2027", value: 20 },
  ];

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const MPhilGraph = () => {
  const [chartHeight, setChartHeight] = useState(window.innerWidth <= 768 ? 200 : 300);

  const updateChartHeight = () => {
    setChartHeight(window.innerWidth <= 768 ? 200 : 300);
  };

  useEffect(() => {
    window.addEventListener("resize", updateChartHeight);
    return () => {
      window.removeEventListener("resize", updateChartHeight);
    };
  }, []);

  const data = [
    { name: "2020", value: 10 },
    { name: "2021", value: 12 },
    { name: "2022", value: 8 },
    { name: "2023", value: 15 },
  ];

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { FacultyGraph, PhDGraph, MPhilGraph };

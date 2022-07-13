import React from "react";
import { Box, Slider } from "@mui/material";
import moment from "moment";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const months = Array.from({ length: 12 }, (item, i) => {
  return new Date(0, i).toLocaleString("en-US", { month: "short" });
});

const minYear = 2016;
const maxYear = 2022;
const step = 0.083;

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      position: "top" as const,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [12, 15, 70, 56, 78, 89, 67],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.4,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [80, 5, 70, 10, 78, 100, 45],
      borderColor: "rgb(100, 235, 165)",
      backgroundColor: "rgba(100, 235, 165, 0.5)",
      tension: 0.4,
    },
  ],
};
const labels2 = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
export const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      position: "top" as const,
      display: false,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};
export const data2 = {
  labels: labels2,
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [12, 15, 70, 56, 78, 89, 67],
      borderColor: "rgba(223, 223, 222)",
      backgroundColor: "rgba(223, 223, 222, 0.5)",
      tension: 0.4,
    },
  ],
};
function valuetext(value: number) {
  return `${value}`;
}

const AreaChart = () => {
  const minDistance = 83.33;
  const [value, setValue] = React.useState<number[]>([2021, 2022]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  // const min = moment(moment().subtract(10, "years")).startOf("year");
  // const max = moment().endOf("year");
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 40%)",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "3rem",
        }}
      >
        <Line options={options} data={data} />
      </Box>
      <Box
        sx={{
          height: "7rem",
          width: "100vw",
          display: "block",
          position: "relative",
        }}
      >
        <Line options={options2} data={data2} />
        <Box
          sx={{
            width: "100%",
            top: "86px",
            position: "absolute",
          }}
        >
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={minYear}
            max={maxYear}
            step={step}
            marks={true}
            size="small"
            sx={{
              width: "98%",
              margin: "0 0 0 2.3rem",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AreaChart;

"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";

const Piechart = () => {
  useEffect(() => {
    // Initialize ECharts instance
    const chartDom = document.getElementById("pie")!;
    const myChart = echarts.init(chartDom);

    // Define chart options
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    };

    // Set chart options
    myChart.setOption(option);

    // Cleanup function (optional)
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return <div id="pie" style={{ width: "100%", height: "400px" }} />;
};

export default Piechart;

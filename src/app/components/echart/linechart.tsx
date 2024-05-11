"use client";
import React, { useEffect } from "react";
import * as echarts from "echarts";
import data from "../../data/test.json";

const Linechart = () => {
  useEffect(() => {
    // Fetch data from the server
    const fetchData = async () => {
      try {
        run(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Function to process and render the chart
    const run = (_rawData: any) => {
      const countries = [
        "Finland",
        "France",
        "Germany",
        "Iceland",
        "Norway",
        "Poland",
        "Russia",
        "United Kingdom",
      ];
      const datasetWithFilters: echarts.DatasetComponentOption[] = [];
      const seriesList: echarts.SeriesOption[] = [];

      echarts.util.each(countries, function (country) {
        var datasetId = "dataset_" + country;
        datasetWithFilters.push({
          id: datasetId,
          fromDatasetId: "dataset_raw",
          transform: {
            type: "filter",
            config: {
              and: [
                { dimension: "Year", gte: 1950 },
                { dimension: "Country", "=": country },
              ],
            },
          },
        });
        seriesList.push({
          type: "line",
          datasetId: datasetId,
          showSymbol: false,
          name: country,
          endLabel: {
            show: true,
            formatter: function (params: any) {
              return params.value[3] + ": " + params.value[0];
            },
          },
          labelLayout: {
            moveOverlap: "shiftY",
          },
          emphasis: {
            focus: "series",
          },
          encode: {
            x: "Year",
            y: "Income",
            label: ["Country", "Income"],
            itemName: "Year",
            tooltip: ["Income"],
          },
        });
      });

      const option: echarts.EChartsOption = {
        animationDuration: 10000,
        dataset: [
          {
            id: "dataset_raw",
            source: _rawData,
          },
          ...datasetWithFilters,
        ],
        tooltip: {
          order: "valueDesc",
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          nameLocation: "middle",
        },
        yAxis: {
          name: "Income",
        },
        grid: {
          right: 140,
        },
        series: seriesList,
      };

      const chartDom = document.getElementById("line")!;
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
    };

    // Call the fetchData function when component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code (if needed)
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return <div id="line" style={{ width: "100%", height: "400px" }} />;
};

export default Linechart;

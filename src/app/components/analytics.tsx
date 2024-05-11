import React from "react";
import Linechart from "./echart/linechart";
import Stackedchart from "./echart/stackedchart";
import { PieChart } from "echarts/charts";
import Piechart from "./echart/piechart";

const Analytics = () => {
  return (
    <section className="p-10 bg-gray-50 h-full">
      <div className="flex flex-col gap-5">
        <div className="px-3 py-10 rounded-xl shadow-sm bg-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-5">
              <h2 className="text-xl font-semibold">
                Occupancy data for the last 30 days
              </h2>
              <p className="text-sm">last 30 days</p>
            </div>
            <hr />
            <Linechart />
            <hr />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5">
          <div className="p-3 rounded-xl col-span-3 shadow-sm bg-white">
            <Stackedchart />
          </div>
          <div className="p-3 col-span-2 rounded-xl shadow-sm bg-white">
            <Piechart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;

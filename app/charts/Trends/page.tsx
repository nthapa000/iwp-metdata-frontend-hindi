"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import {
  LineChart,
  BarChart,
  ScatterChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  Bar,
} from "recharts";
import domtoimage from "dom-to-image";
import fileDownload from "js-file-download";

export default function Trends() {
  const searchParams = useSearchParams();
  const stateid = searchParams.get("selectedState");
  const districtid = searchParams.get("selectedDistrictType");
  const tablename = searchParams.get("selectedDataType");
  const fromYear = searchParams.get("selectedFromYear");
  const toYear = searchParams.get("selectedToYear");
  const [finalData, setFinalData] = useState([]);
  const [annualTotals, setAnnualTotals] = useState([]);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}final?tablename=${tablename}&selectedFromYear=${fromYear}&selectedToYear=${toYear}&districtid=${districtid}&stateid=${stateid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFinalData(data);
        const annualTotals = calculateAnnualTotals(data);
        setAnnualTotals(annualTotals);
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateAnnualTotals = (data: any) => {
    const annualTotals: any = [];
    const groupedByYear: any = {};

    // Group data by year
    data.forEach((item: any) => {
      const year = item.year_val;
      if (!groupedByYear[year]) {
        groupedByYear[year] = [];
      }
      groupedByYear[year].push(item);
    });

    // Calculate annual total for each year
    for (const year in groupedByYear) {
      const annualTotal = {
        year_val: parseInt(year),
        value: groupedByYear[year].reduce((acc: any, item: any) => {
          return (
            acc +
            item.jan +
            item.feb +
            item.mar +
            item.apr +
            item.may +
            item.jun +
            item.jul +
            item.aug +
            item.sep +
            item.oct +
            item.nov +
            item.dec
          );
        }, 0),
      };
      annualTotals.push(annualTotal);
    }

    return annualTotals;
  };

  const [activeContent, setActiveContent] = useState(null);

  const toggleContent = (buttonNumber: any) => {
    setActiveContent(buttonNumber);
  };

  const handleSaveClick = () => {
    const chartNode = document.getElementById("chart");
    const options = {
      bgcolor: "#ffffff", // Set background color to white
    };

    if (!chartNode) return;

    domtoimage.toBlob(chartNode, options).then(function (blob: any) {
      fileDownload(blob, "dom-to-image.png");
    });
  };

  return (
    <div className="">
      <div className=" text-center sm:px-16 xl:px-48 mb-10  mt-16 lg:mt-28">
        <h1 className="  text-3xl font-bold leading-none tracking-wide text-gray-500 md:text-4xl lg:text-4xl dark:text-white">
          Select the type of Chart you want
        </h1>
      </div>
      <div className="flex justify-center ">
        <div className="space-x-4">
          <button
            type="button"
            onClick={() => toggleContent(1)}
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm lg:text-lg font-semibold rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 hover:text-arghyam disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 md:w-40 "
          >
            Line Chart
          </button>
          <button
            type="button"
            onClick={() => toggleContent(2)}
            className="py-3 px-4 inline-flex items-center gap-x-2 lg:text-lg text-sm font-semibold rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 hover:text-arghyam disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 md:w-40"
          >
            Scatter Chart
          </button>
          <button
            type="button"
            onClick={() => toggleContent(3)}
            className="py-3 px-4 inline-flex items-center gap-x-2 lg:text-lg text-sm font-semibold rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 hover:text-arghyam disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 md:w-40"
          >
            Bar Chart
          </button>
        </div>
      </div>
      <div
        className={`mt-4 flex  justify-center p-4 ${
          activeContent === 1 ? "" : "hidden"
        }`}
      >
        <div id="chart" className="bg-white p-4 m-4 w-4/5 md:w-1/2 lg:w-[40%]">
          <ResponsiveContainer height={350} width="100%">
            <LineChart
              data={annualTotals}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="year_val" />
              <YAxis tickMargin={10}>
                <Label
                  style={{ fontWeight: "bold", fontSize: "15" }}
                  value={"Annual Total"}
                  offset={-14}
                  angle={-90}
                  position="insideLeft"
                />
              </YAxis>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <button onClick={handleSaveClick} className="hover:text-arghyam ">
              Download Chart as PDF
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-4 flex  justify-center p-4 ${
          activeContent === 2 ? "" : "hidden"
        }`}
      >
        <div id="chart" className="bg-white p-4 m-4 w-4/5 md:w-1/2 lg:w-[40%]">
          <ResponsiveContainer height={350} width="100%">
            <ScatterChart
              data={annualTotals}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="year_val" />
              <YAxis tickMargin={10}>
                <Label
                  style={{ fontWeight: "bold", fontSize: "15" }}
                  value={"Annual Total"}
                  offset={-14}
                  angle={-90}
                  position="insideLeft"
                />
              </YAxis>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <button onClick={handleSaveClick} className="hover:text-arghyam ">
              Download Chart as PDF
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-4 flex  justify-center p-4 ${
          activeContent === 3 ? "" : "hidden"
        }`}
      >
        <div id="chart" className="bg-white p-4 m-4 w-4/5 md:w-1/2 lg:w-[40%]">
          <ResponsiveContainer height={350} width="100%">
            <BarChart
              data={annualTotals}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year_val" />
              <YAxis tickMargin={10} dataKey="annualTotal">
                <Label
                  style={{ fontWeight: "bold", fontSize: "15" }}
                  value={"Annual Total"}
                  offset={-14}
                  angle={-90}
                  position="insideLeft"
                />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="year" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <button onClick={handleSaveClick} className="hover:text-arghyam ">
              Download Chart as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

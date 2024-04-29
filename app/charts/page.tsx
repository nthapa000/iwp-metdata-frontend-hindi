"use client";

import React from "react";
import { useEffect, useState } from "react";
import { State, District, Year } from "@/types"
import Link from "next/link";
import { parametersKey } from "@/data";
import { parametersValue } from "@/data";

const Page = () => {
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDataType, setSelectedDataType] = useState("");
  const [selectedDistrictType, setSelectedDistrictType] = useState("");
  const [selectedFromYear, setSelectedFromYear] = useState("");
  const [selectedToYear, setSelectedToYear] = useState("");
  const [districts, setDistricts] = useState([]);
  const [fromYear, setfromYear] = useState([]);
  const [toYear, setToYear] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}state`)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  }, []);

  const handleStateSelectChange = (event: any) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setSelectedState(selectedValue);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}district?Stateid=${selectedValue}`)
      .then((res) => res.json())
      .then((data) => setDistricts(data))
      .catch((err) => console.log(err));
  };

  const handleDistrictSelectChange = (event: any) => {
    const selectedDistrictValue = event.target.value;
    console.log(selectedDistrictValue);
    setSelectedDistrictType(selectedDistrictValue);
  };

  const handleDataSelectChange = (event: any) => {
    const selectedDataValue = event.target.value;
    console.log(selectedDataValue);
    setSelectedDataType(selectedDataValue);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}year?tablename=${selectedDataValue}`)
      .then((res) => res.json())
      .then((data) => {
        setfromYear(data);
        setToYear(data);
      })
      .catch((err) => console.log(err));
  };

  const handleFromSelectChangeYear = (event: any) => {
    const selectedFromYearValue = event.target.value;
    setSelectedFromYear(selectedFromYearValue);
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}yearAfter?tablename=${selectedDataType}&selectedFromYear=${selectedFromYearValue}`
    )
      .then((res) => res.json())
      .then((data) =>{ 
        setToYear(data)
        setSelectedToYear("");
      })
      .catch((err) => console.log(err));
  };

  const handleToYearChange = (event: any) => {
    const selectedToYearValue = event.target.value;
    setSelectedToYear(selectedToYearValue);
  };

  return (
    <main>
      <div className="h-full">
        <div className=" justify-center items-center h-screen m-4 mt-10 lg:mt-20">
          <div className=" text-center sm:px-16 xl:px-48 mb-10 md:mb-16">
            <h1 className="mb-4  text-3xl font-extrabold leading-none tracking-wide text-gray-600 md:text-4xl lg:text-4xl dark:text-white">
              Select info according to your state
            </h1>
          </div>
          <div className="mt-4 text-center">
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold m-3 md:text-xl tracking-wider">
                States
              </h1>
              <select
                value={selectedState}
                onChange={handleStateSelectChange}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
              >
                <option>Select a state</option>
                {state.map((item: State) => (
                  <option key={item.stateid} value={item.stateid}>
                    {item.State}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold m-3 tracking-wider md:text-xl ">
                Districts
              </h1>
              <select
                value={selectedDistrictType}
                onChange={handleDistrictSelectChange}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
              >
                <option value="">
                  Select a district from the selected state
                </option>
                {districts.map((district: District) => (
                  <option key={district.districtid} value={district.districtid}>
                    {district.Distict}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold tracking-wider m-3 md:text-xl">
                Data Type
              </h1>
              <select
                value={selectedDataType}
                onChange={handleDataSelectChange}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
              >
                <option>Select the Data type</option>
                {parameters.map((parameter, index) => (
                  <option key={index} value={parameter}>
                    {parameter}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold tracking-wider m-3 md:text-xl ">
                From the Year
              </h1>
              <select
                value={selectedFromYear}
                onChange={handleFromSelectChangeYear}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  p-3"
              >
                <option value="">Select the year starting from</option>
                {fromYear.map((year: Year) => (
                  <option key={year.year_val} value={year.year_val}>
                    {year.year_val}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold m-3 tracking-wider md:text-xl ">
                To the Year
              </h1>
              <select
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
                onChange={handleToYearChange}
              >
                <option value="">Select the year starting from first</option>
                {toYear.map((year: Year) => (
                  <option key={year.year_val} value={year.year_val}>
                    {year.year_val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {selectedToYear && (
            <div className="flex justify-center mt-6 sm:px-16 md:px-18 xl:px-48 mb-10 md:mb-16">
              <div className="mb-4 w-8/12  leading-none lg:text-4xl dark:text-white">
                <div className="">
                  <Link
                    href={{
                      pathname:'/charts/AnnualMean',
                      query:{
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear
                      }
                    }}
                    className=" text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">
                      Generate Annual mean
                    </p>
                  </Link>
                  <Link
                    href={{
                      pathname:"/charts/MonthlyMean",
                      query:{
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear
                      }
                    }}
                    className=" text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">
                      Generate Monthly mean for each year
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={{
                      pathname:"/charts/AnnualTotal",
                      query:{
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear
                      }
                    }}
                    className="text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">
                      Show annual total
                    </p>
                  </Link>
                  <Link
                    href={{
                      pathname:"/charts/Trends",
                      query:{
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear
                      }
                    }}
                    className="text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">
                      Trends and Chart
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;

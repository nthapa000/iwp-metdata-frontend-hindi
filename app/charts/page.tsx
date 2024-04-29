"use client";

import React from "react";
import { useEffect, useState } from "react";
import { State, District, Year } from "@/types";
import Link from "next/link";
import { parameters } from "@/data";

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
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}district?Stateid=${selectedValue}`
    )
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
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}year?tablename=${selectedDataValue}`
    )
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
      .then((data) => {
        setToYear(data);
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
            <h1 className="mb-4  text-3xl font-extrabold leading-none tracking-wide text-gray-600 md:text-4xl lg:text-4xl ">
            अपने राज्य के अनुसार जानकारी चुनें
            </h1>
          </div>
          <div className="mt-4 text-center">
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold m-3 md:text-xl tracking-wider">
              राज्य
              </h1>
              <select
                value={selectedState}
                onChange={handleStateSelectChange}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
              >
                <option>एक राज्य का चयन करें</option>
                {state.map((item: State) => (
                  <option key={item.stateid} value={item.stateid}>
                    {item.State}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold m-3 tracking-wider md:text-xl ">
              जिलों
              </h1>
              <select
                value={selectedDistrictType}
                onChange={handleDistrictSelectChange}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
              >
                <option value="">
                चयनित राज्य से एक जिला चुनें
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
              डेटा प्रकार
              </h1>
              <select
                value={selectedDataType}
                onChange={handleDataSelectChange}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3"
              >
                <option>डेटा प्रकार चुनें</option>
                {parameters.map((parameter, index) => (
                  <option key={index} value={parameter.key}>
                    {parameter.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold tracking-wider m-3 md:text-xl ">
              वर्ष से
              </h1>
              <select
                value={selectedFromYear}
                onChange={handleFromSelectChangeYear}
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg  p-3"
              >
                <option value="">से प्रारंभ होने वाले वर्ष का चयन करें</option>
                {fromYear.map((year: Year) => (
                  <option key={year.year_val} value={year.year_val}>
                    {year.year_val}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <h1 className="text-gray-500 font-bold m-3 tracking-wider md:text-xl ">
              वर्ष के लिए
              </h1>
              <select
                className="w-8/12 md:w-5/12 lg:w-4/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-3"
                onChange={handleToYearChange}
              >
                <option value="">प्रथम से शुरू होने वाला वर्ष चुनें</option>
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
              <div className="mb-4 w-8/12  leading-none lg:text-4xl ">
                <div className="">
                  <Link
                    href={{
                      pathname: "/charts/AnnualMean",
                      query: {
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear,
                      },
                    }}
                    className=" text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">
                    वार्षिक माध्य उत्पन्न करें
                    </p>
                  </Link>
                  <Link
                    href={{
                      pathname: "/charts/MonthlyMean",
                      query: {
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear,
                      },
                    }}
                    className=" text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">
                    प्रत्येक वर्ष के लिए मासिक माध्य उत्पन्न करें
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={{
                      pathname: "/charts/AnnualTotal",
                      query: {
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear,
                      },
                    }}
                    className="text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">वार्षिक कुल दिखाएँ</p>
                  </Link>
                  <Link
                    href={{
                      pathname: "/charts/Trends",
                      query: {
                        selectedState,
                        selectedDistrictType,
                        selectedDataType,
                        selectedFromYear,
                        selectedToYear,
                      },
                    }}
                    className="text-xl font-medium "
                  >
                    <p className="m-4 text-center arghyam">रुझान और चार्ट</p>
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

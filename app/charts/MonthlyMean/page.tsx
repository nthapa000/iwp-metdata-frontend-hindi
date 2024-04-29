"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { calculateMonthlyMeans } from './utils';

export default function MonthlyMean() {
  const searchParams = useSearchParams();
  const stateid = searchParams.get('selectedState');
  const districtid = searchParams.get('selectedDistrictType');
  const tablename = searchParams.get('selectedDataType');
  const fromYear = searchParams.get('selectedFromYear');
  const toYear = searchParams.get('selectedToYear');
  const [finalData, setFinalData] = useState([]);
  

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}final?tablename=${tablename}&selectedFromYear=${fromYear}&selectedToYear=${toYear}&districtid=${districtid}&stateid=${stateid}`
    )
      .then((res) => res.json())
      .then((data) => setFinalData(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <h1 className='text-2xl m-4 '>Monthly Mean for Each Year:</h1>
      <ul>
        {calculateMonthlyMeans(finalData).map((meanData:any, index:any) => (
          <li key={index} className='m-4'>
            <p>Year: {meanData.year}</p>
            <p>Monthly Mean: {meanData.monthlyMean.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

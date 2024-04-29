import { WeatherData } from "@/types";

// Function to calculate the annual total for each year
export const calculateAnnualTotal = (finalData:WeatherData[]) => {
    const annualTotals:any = [];
    finalData.forEach((item:any) => {
      let sumOfMonthInYear = 0;

      // Calculate the sum of all months for each year
      sumOfMonthInYear =
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
        item.dec;

      // Push the annual total for the current year to the array
      annualTotals.push({
        year: item.year_val,
        total: sumOfMonthInYear,
      });
    });
    return annualTotals;
  };

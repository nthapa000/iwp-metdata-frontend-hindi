import { WeatherData } from "@/types";

  // Function to calculate the monthly mean for each year
 export const calculateMonthlyMeans = (finalData: WeatherData[]) => {
    const monthlyMeans:any = [];
    finalData.forEach((item:any) => {
      const sumOfMonths =
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
      const monthlyMean = {
        year: item.year_val,
        monthlyMean: sumOfMonths / 12,
      };
      monthlyMeans.push(monthlyMean);
    });
    return monthlyMeans;
  };
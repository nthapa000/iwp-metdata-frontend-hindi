import { WeatherData } from "@/types";

// Function to calculate the annual mean
const calculateAnnualMean = (finalData: WeatherData[]) => {
  let sumOfYears = 0;
  let totalYears = 0;

  finalData.forEach((item) => {
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

    // Add the sum of months for the current year to the total sum of years
    sumOfYears += sumOfMonthInYear;

    // Increment the total number of years
    totalYears++;
  });

  // Calculate the annual mean by dividing the total sum of years by the number of years
  const annualMean = sumOfYears / totalYears;
  return annualMean;
};

export { calculateAnnualMean };
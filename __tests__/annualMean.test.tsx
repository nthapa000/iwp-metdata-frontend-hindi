import '@testing-library/jest-dom';
import { WeatherData } from "@/types"; 
import { calculateAnnualMean } from '@/app/charts/AnnualMean/utils';

describe('calculateAnnualMean', () => {
  it('calculates the correct annual mean from multiple years', () => {
    const mockData: WeatherData[] = [
      { stateid: 1, districtid: 1, State: 'State1', state_dist_key: 's1d1', Distict: 'District1', year_val: 2000, jan: 10, feb: 20, mar: 30, apr: 40, may: 50, jun: 60, jul: 70, aug: 80, sep: 90, oct: 100, nov: 110, dec: 120 },
      { stateid: 2, districtid: 2, State: 'State2', state_dist_key: 's2d2', Distict: 'District2', year_val: 2001, jan: 5, feb: 10, mar: 15, apr: 20, may: 25, jun: 30, jul: 35, aug: 40, sep: 45, oct: 50, nov: 55, dec: 60 }
    ];

    const result = calculateAnnualMean(mockData);
    expect(result).toEqual(585); // Expected mean ((780 + 390) / 2)
  });

  it('handles an empty data array', () => {
    const mockData: WeatherData[] = [];
    const result = calculateAnnualMean(mockData);
    expect(result).toBeNaN(); // Should return NaN since division by zero is not defined
  });

  it('calculates the correct annual mean for a single year', () => {
    const mockData: WeatherData[] = [
      { stateid: 1, districtid: 1, State: 'State1', state_dist_key: 's1d1', Distict: 'District1', year_val: 2000, jan: 10, feb: 20, mar: 30, apr: 40, may: 50, jun: 60, jul: 70, aug: 80, sep: 90, oct: 100, nov: 110, dec: 120 }
    ];

    const result = calculateAnnualMean(mockData);
    expect(result).toEqual(780); // Only one year's data, mean should be the sum of months
  });
});



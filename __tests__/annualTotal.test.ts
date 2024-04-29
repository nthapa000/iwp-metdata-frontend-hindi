import { calculateAnnualTotal } from "@/app/charts/AnnualTotal/utils";
import { AnnualTotalType } from "@/types";

describe('calculateAnnualTotal', () => {
  it('calculates the correct annual total for each year', () => {
    const mockData :any = [
      { year_val: 2000, jan: 10, feb: 20, mar: 30, apr: 40, may: 50, jun: 60, jul: 70, aug: 80, sep: 90, oct: 100, nov: 110, dec: 120 },
      { year_val: 2001, jan: 5, feb: 10, mar: 15, apr: 20, may: 25, jun: 30, jul: 35, aug: 40, sep: 45, oct: 50, nov: 55, dec: 60 }
    ];

    const result = calculateAnnualTotal(mockData);

    expect(result).toEqual([
      { year: 2000, total: 780 }, 
      { year: 2001, total: 390 }  
    ]);
  });

  it('returns an empty array for empty data', () => {
    const mockData:any = [];

    const result = calculateAnnualTotal(mockData);

    expect(result).toEqual([]);
  });
});

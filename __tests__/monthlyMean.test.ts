import { calculateMonthlyMeans } from "@/app/charts/MonthlyMean/utils";

// writing any just for quick fix will fix it in future
describe('calculateMonthlyMeans', () => {
  it('calculates the correct monthly mean for each year', () => {
    const mockData:any = [
      { year_val: 2000, jan: 10, feb: 20, mar: 30, apr: 40, may: 50, jun: 60, jul: 70, aug: 80, sep: 90, oct: 100, nov: 110, dec: 120 },
      { year_val: 2001, jan: 5, feb: 10, mar: 15, apr: 20, may: 25, jun: 30, jul: 35, aug: 40, sep: 45, oct: 50, nov: 55, dec: 60 }
    ];

    const result = calculateMonthlyMeans(mockData);

    expect(result).toEqual([
      { year: 2000, monthlyMean: (10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 + 100 + 110 + 120) / 12 }, // Monthly mean for 2000
      { year: 2001, monthlyMean: (5 + 10 + 15 + 20 + 25 + 30 + 35 + 40 + 45 + 50 + 55 + 60) / 12 }    // Monthly mean for 2001
    ]);
  });

  it('returns an empty array for empty data', () => {
    const mockData:any = [];

    const result = calculateMonthlyMeans(mockData);

    expect(result).toEqual([]);
  });
});

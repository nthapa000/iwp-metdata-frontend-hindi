export interface State {
    State: string;
    stateid: number;
}

export interface District {
    Distict: string;
    districtid: number;
}

export interface Year {
    year_val: number;
}

export interface WeatherData {
    stateid: number;
    districtid: number;
    State: string;
    state_dist_key: string;
    Distict: string;
    year_val: number;
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sep: number;
    oct: number;
    nov: number;
    dec: number;
  };
  
export interface AnnualTotalType{
    year_val: number;
    jan: number;
    feb: number;
    mar: number;
    apr: number;
    may: number;
    jun: number;
    jul: number;
    aug: number;
    sep: number;
    oct: number;
    nov: number;
    dec: number;
}
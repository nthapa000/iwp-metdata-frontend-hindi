import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-10">
      <div className="justify-center items-center m-4 mt-10 lg:mt-20">
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-3xl font-extrabold leading-none tracking-normal text-gray-700 md:text-4xl lg:text-4xl dark:text-white">
            Met Data
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400 leading-7">
            Meteorological datasets for 13 climate parameters for all districts
            of India from 1901 to 2002. Climate parameters included are:
            Precipitation, Max, Min and Avg Temperature, Cloud cover, Vapour
            pressure, Wet-day frequency, Diurnal temperature range, Ground frost
            frequency, Reference crop evapotranspiration, Potential
            evapotranspiration. The source data is from CRU 2.1 dataset of
            Tyndall Centre for Climate Change Research.
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-xl font-semibold leading-none tracking-normal text-gray-700 md:text-2xl lg:text-3xl dark:text-white">
            Source of Data
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
            India Water Portal, Tyndall Centre for Climate Change Research
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-xl font-semibold leading-none tracking-normal text-gray-700 md:text-2xl lg:text-3xl dark:text-white">
          Background of Data
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
          <Link
              href="https://www.indiawaterportal.org/articles/background-meteorological-datasets"
              className="hover:text-arghyam"
            >
              Background on the Meteorological Dataset
            </Link>
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-4  text-xl font-semibold leading-none tracking-normal text-gray-700 md:text-2xl lg:text-3xl dark:text-white">
            Data Format
          </h1>
          <p className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
            Data is available in CSV format and charts to visualize
          </p>
        </div>
        <div className=" text-left sm:px-16 xl:px-48">
          <h1 className="mb-3  text-xl font-semibold leading-7  tracking-normal text-gray-800 md:text-2xl lg:text-3xl dark:text-white">
          Get the Charts according to your States and District
          </h1>
          <div className="mb-6 text-left font-normal text-gray-600 lg:text-xl  dark:text-gray-400">
          <Link
              href="/charts"
              className="arghyam"
            >
             Visualize the Charts
             <div className="py-2"><button
                className="bg-transparent  font-semibold hover:bg-[#3e5463] text-[#3e5463] hover:text-white py-3 px-4 border border-black mt-2 hover:border-transparent rounded"
                style={{
                  border: "1px solid #5b7282",
                  borderRadius: "2px",
                  letterSpacing: ".5px",
                }}
              >
                Charts and Data
              </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

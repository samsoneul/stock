import React, { useContext } from "react";
import Card from "./card";
import { mockCompanyDetails } from "../constants";
import Search from "./search";
import Header from "./Header";
import Details from "./details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeIcon from "./themeIcon";
import ThemeContext from "../Theme/Theme";
const Dasboard = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen bg-neutral-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-slate-900 text-gray-300 " : "bg-neutral-100"
      } `}
    >
      <div className="col-span-1  md:col-span-2 xl:col-span-3 row-span-1 space-y-1 flex justify-start items-center">
        <Header name={mockCompanyDetails.name} />
        <ThemeIcon />
      </div>
      <div className="md:col-span-2 row-span-6 ">
        <Chart />
      </div>
      <div className="row-span-2">
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        />
      </div>
      <div className="row-span-2 xl:row-span-4">
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
};

export default Dasboard;

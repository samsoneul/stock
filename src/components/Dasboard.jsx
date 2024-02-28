import React, { useContext, useEffect, useState } from "react";

import Header from "./Header";
import Details from "./details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeIcon from "./themeIcon";
import ThemeContext from "../Theme/Theme";
import StockContext from "../Theme/StockConstex";
import { fetchStockDetails, fetchQuote, fetchNext } from "../api/stock-api";

const Dasboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const [nextDay, setNext] = useState({});

  useEffect(() => {
    const udpateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails([]);
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote(0);
        console.log(error);
      }
    };
    const updateNextDay = async () => {
      try {
        const result = await fetchNext(stockSymbol);
        setNext(result);
        console.log(result);
      } catch (error) {
        setNext(0);
        console.log(error);
      }
    };
    updateNextDay();
    udpateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);
  return (
    <div
      className={`h-screen bg-neutral-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-slate-900 text-gray-500 " : "bg-neutral-100"
      } `}
    >
      <div className="col-span-1  md:col-span-2 xl:col-span-3 row-span-1 space-y-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
        <ThemeIcon />
      </div>
      <div className="md:col-span-2 row-span-6 ">
        <Chart />
      </div>

      <div className="row-span-2">
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-4">
        <Details details={stockDetails} nextDayP={nextDay.np} />
      </div>
    </div>
  );
};

export default Dasboard;

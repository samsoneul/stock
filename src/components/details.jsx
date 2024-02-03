import React from "react";
import Card from "./card";

const Details = ({details}) => {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };
  const milTObill = (number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    
      <Card>
        {" "}
        <ul className="w-full h-full overflow-scroll custom-scrollbar flex flex-col justify-between divide-gray-400 divide-y-3   ">
          {Object.keys(detailsList).map((item) => {
            return (
              <li
                className="
                flex-1 flex justify-between items-center "
                key={item}
              >
                <span> {detailsList[item]} </span>
                <span>
                  {item === "marketCapitalization"
                    ? `${milTObill(details[item])}B`
                    : details[item]}
                </span>
              </li>
            );
          })}
        </ul>
      </Card>
    
  );
};

export default Details;

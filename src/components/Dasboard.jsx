import React from "react";
import Card from "./card";
import { mockCompanyDetails } from "../constants";
import Search from "./search";
import Header from "./Header";
import Details from "./details";
const Dasboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 space-y-1 flex justify-start items-center"> 
       <Header name={mockCompanyDetails.name}/>
      </div>
      <div className="md:col-span-2 row-span-4"> 
        <Card> Chart</Card>
      </div>
      <div> 
        <Card> Overview</Card>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetails}/>
      </div>
    </div>
  );
};

export default Dasboard;

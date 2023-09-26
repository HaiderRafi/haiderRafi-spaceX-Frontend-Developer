import React, { useEffect, useState } from "react";
import { ALL_CAPSULES, NOT_FOUND } from "../utils/constant";
import MainCardSingle from "./MainCardSingle";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

//making a single function for filtering with 3 parameters
//key is static
function filter(apiData, key, filterStatus) {
  let temp = apiData.filter((data) => data?.[key]?.includes(filterStatus));
  console.log(temp);
  return temp;
}

const MainCardsDetails = () => {
  let [apiData, setApiData] = useState([]); //apiData state
  let [filterApiData, setFilterApiData] = useState([]); //filtered Data state
  let [filterStatus, setFilterStatus] = useState(""); //dropDown state for status
  let [filterType, setFilterType] = useState(""); //dropDown state for Type
  let [filterDate, setFilterDate] = useState(""); //dropDown state for Date
  let [page, setPage] = useState(1); //for Pagination

  //async function for apiCall
  async function apiFunc() {
    let temp = await fetch(ALL_CAPSULES);
    let data = await temp.json();
    // console.log(data);
    setApiData(data);
    setFilterApiData(data);
  }

  //calling above function in useEffect
  useEffect(() => {
    apiFunc();
  }, []);

  //for filterStatus
  useEffect(() => {
    let data = filter(apiData, "status", filterStatus);
    setFilterApiData(data);
  }, [filterStatus]);

  //for filterType
  useEffect(() => {
    let data = filter(apiData, "type", filterType);
    setFilterApiData(data);
  }, [filterType]);

  //for filterDate
  useEffect(() => {
    let data = filter(apiData, "original_launch", filterDate);
    setFilterApiData(data);
  }, [filterDate]);

  //for shimmer effect
  if (apiData.length === 0) {
    return <Shimmer />;
  }

  //handle prev pagination
  function handlePrev() {
    setPage(1);
  }

  //handle next pagination
  function handleNext() {
    setPage(2);
  }

  return (
    <>
      <main>
        <h1 className=" pt-5 pb-5 pl-40 font-bold text-xl underline md:pt-5 md:pb-5 md:pl-52 md:font-bold md:text-4xl md:underline">
          Capsules
        </h1>
        <div className="flex justify-center">
          {/* for filter by status */}
          <div className="pr-2 m-2 p-2 border border-black bg-gray-100 ">
            <label htmlFor="statusFilter">Filter by Status:</label>
            <select
              className="bg-gray-100"
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
              <option value="destroyed">Destroyed</option>
            </select>
          </div>

          {/* <div className="pr-2 m-2 p-2 border border-black  "> */}
          {/* <div className=" pr-2 m-2 p-2 border border-black sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "> */}
          {/* for filter by type */}

          <div className=" pr-2 m-2 p-2 border border-black bg-gray-100  ">
            <label htmlFor="typeFilter">Filter by Type:</label>
            <select
              className="bg-gray-100"
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="Dragon 1.0">Dragon 1.0</option>
              <option value="Dragon 1.1">Dragon 1.1</option>
              <option value="Dragon 2.0">Dragon 2.0</option>
            </select>
          </div>

          {/* filter by Date */}
          <div className="pr-2 m-2 p-2 border border-black bg-gray-100 ">
            <label htmlFor="dateFilter">Filter by Date Range:</label>
            <input
              className="bg-gray-100"
              type="date"
              value={filterDate}
              onChange={(e) => {
                setFilterDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap w-[1000px]  justify-center p-2 m-2">
            {/* conditional rendering */}

            {filterApiData && filterApiData.length === 0 ? (
              // <p className="text-center text-red-500 font-bold">Not Found</p>
              <img className="" alt="notFound" src={NOT_FOUND} />
            ) : (
              filterApiData
                .slice(page * 10 - 10, page * 10) //pagination added with the help of slice
                .map((data, index) => (
                  <Link key={index} to={`capsule/${data.capsule_serial}`}>
                    <MainCardSingle key={index} item={data} />
                  </Link>
                ))
            )}
          </div>
        </div>

        {/* for pagination buttons */}
        {filterApiData.length != 0 && (
          <div className="flex justify-center">
            <button
              onClick={handlePrev}
              className="p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-black hover:bg-gray-800 hover:text-white"
            >
              PREV
            </button>
            <button
              onClick={handleNext}
              className="p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-black hover:bg-gray-800 hover:text-white"
            >
              NEXT
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default MainCardsDetails;

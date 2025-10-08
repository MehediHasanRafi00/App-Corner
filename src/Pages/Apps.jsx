import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useApps from "../Hooks/useApps";
import SkeletonLoading from "../Components/SkeletonLoading";
import AppsCard from "../Components/AppsCard";
import { Link, Navigate } from "react-router";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);

    setTimeout(()=>{
      setSearchLoading(false)
    },300)
  };

  return (
    <div className="py-20 container mx-auto px-4 md:6 lg:8">
      <div className="text-center  mb-6">
        <h1 className="font-bold text-4xl text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382] mt-3">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center my-8">
          <h2 className="font-semibold text-2xl">
            ({searchedApps.length}) Apps Founds
          </h2>
          <label className="input ">
            <IoSearchSharp className="text-xl text-gray-500" />
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              placeholder="Search Products"
            />
          </label>
        </div>
        <div>
          {loading || searchLoading  ? (
            <SkeletonLoading count={30}></SkeletonLoading>
          ) : searchedApps.length === 0 ? (
            <div className="flex flex-col items-center gap-6">
              <h2 className="font-medium text-5xl text-gray-500 text-center ">
                (No App Found)
              </h2>
              <Link onClick={() => Navigate(-1)} className="btn gradient-bg">
                {" "}
                Show all Apps
              </Link>
            </div>
          ) : (
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchedApps.map((app) => (
                <AppsCard key={app.id} app={app}></AppsCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;

import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useApps from "../Hooks/useApps";
import SkeletonLoading from "../Components/SkeletonLoading";
import AppsCard from "../Components/AppsCard";
import { Link } from "react-router";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  return (
    <div className="py-20 container mx-auto">
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
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Products"
            />
          </label>
        </div>
        <div>
          {loading ? (
            <SkeletonLoading count={searchedApps.length}></SkeletonLoading>
          ) : searchedApps.length === 0 ? (
            <div className="flex flex-col items-center gap-6">
                <h2 className="font-medium text-5xl text-gray-500 text-center ">(No App Found)</h2>
                <Link className="btn gradient-bg" to={'/apps'}> Show all Apps</Link>
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

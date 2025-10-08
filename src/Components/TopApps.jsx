import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "./AppsCard";
import { Link } from "react-router";
import SkeletonLoading from "./SkeletonLoading";
import LoadingSpinner from "./LoadingSinner";
import ErrorPage from "../Pages/ErrorPage";

const TopApps = () => {
  const { apps, loading, error } = useApps();

  
  if (error) return <ErrorPage></ErrorPage>;

  const topApps = apps.slice(0, 8);

  return (
    <div className="my-20 container mx-auto px-4 md:6 lg:8">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-center text-[#001931]">
          Trending Apps
        </h2>
        <p className="text-center mt-3 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {loading ? (
        <SkeletonLoading count={8}></SkeletonLoading>
      ) : (
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <Link to={"/apps"} className="btn gradient-bg px-8 mt-8 ">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TopApps;

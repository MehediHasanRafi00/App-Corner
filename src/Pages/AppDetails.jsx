import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSinner";
import ErrorAppsNotFound from "./ErrorAppsNotFound";

import dowicon from "../assets/icon-downloads.png";
import raticon from "../assets/icon-ratings.png";
import revicon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { loadInstalledData, updateInstalledData } from "../Utils/LocalStorege";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((a) => String(a.id) === id);

  useEffect(() => {
    if (!app) return;
    const installedApps = loadInstalledData();
    const alreadyInstalled = installedApps.some((a) => a.id === app.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  const handleInstallBtn = (title) => {
    updateInstalledData(app);
    setIsInstalled(true);
    toast.success(`⚡${title} Install Successfully`);
  };
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error || !app) return <ErrorAppsNotFound></ErrorAppsNotFound>;
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;
  return (
    <div className=" mx-auto container my-20">
      <div className="flex flex-col md:flex-row items-center gap-10    mb-10 ">
        <img className="w-[350px]" src={image} alt="" />
        <div className="space-y-5 flex-1">
          <h1 className="font-bold text-3xl tex-[#001931]">{title}</h1>
          <p className="text-[#627382]">
            Developed by{" "}
            <span className="gradient-text font-semibold">{companyName}</span>
          </p>
          <div className="divider"></div>
          <div className="flex flex-wrap items-center gap-3 lg:gap-8">
            <div className="flex flex-col items-center border-r border-dashed border-gray-300 p-3">
              <img src={dowicon} alt="" />
              <p>Downloads</p>
              <p>{downloads}</p>
            </div>
            <div className="flex flex-col items-center border-r border-dashed border-gray-300 p-3">
              <img src={raticon} alt="" />
              <p> Average rating </p>
              <p>{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={revicon} alt="" />
              <p> Total review </p>
              <p>{reviews}</p>
            </div>
          </div>
          <button
            disabled={isInstalled}
            onClick={() => {
              handleInstallBtn(title);
            }}
            className={`btn bg-[#00D390] text-white text-xl font-semibold px-8 py-6 disabled:bg-[#00d390b0] disabled:cursor-not-allowed disabled:shadow-none ${
              isInstalled
                ? "cursor-not-allowed disabled:bg-[#00d390b0]"
                : "skeleton hover:shadow-lg "
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className=" p-4 h-100  my-10">
        <h2 className="text-xl font-semibold mb-6 text-[#001931]">Ratings</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={ratings}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="divider mt-20 mb-10"></div>

      <div>
        <h2 className="text-xl font-semibold mb-3 text-[#001931]">
          Description
        </h2>
        <p className="text-[#627382]">{description}</p>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AppDetails;

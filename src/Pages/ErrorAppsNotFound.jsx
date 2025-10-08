import React from "react";
import EitherAppsNotFound from "../assets/App-Error.png";
import { Link, Navigate, useRouteError } from "react-router";
const ErrorAppsNotFound = () => {
  const error = useRouteError();
  return (
    <div className="">
      <div className="text-center py-20 space-y-3">
        <img className="mx-auto" src={EitherAppsNotFound} alt="" />
        <h1 className="font-semibold text-4xl text-[#001931]">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex justify-center items-center gap-3">
          <Link to={"/"} className="btn gradient-bg px-6">
            {" "}
            Back to Home
          </Link>
          <Link to={"/apps"} className="btn btn-outline px-6">
            {" "}
            Browse apps{" "}
          </Link>
        </div>
        {error.messages}
      </div>
    </div>
  );
};

export default ErrorAppsNotFound;

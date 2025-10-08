import React from "react";
import Error404 from "../assets/error-404.png";
import { Link, Navigate, useRouteError } from "react-router";
const ErrorPage = () => {
  const error = useRouteError();
  const massage = error?.massage || error?.statusText || "Something went wrong!"
  return (
    <div className="">
      <div className="text-center py-20 space-y-3">
        <img className="mx-auto" src={Error404} alt="" />
        <h1 className="font-semibold text-4xl text-[#001931]">
          Oops, page not found!
        </h1>
        <p className="text-[#627382]">
          The page you are looking for is not available.
        </p>
        <p className="text-[#627382]">{massage}</p>
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
        
      </div>
    </div>
  );
};

export default ErrorPage;

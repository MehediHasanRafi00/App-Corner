import React from "react";
import Banner from "../Components/Banner";
import States from "../Components/States";
import TopApps from "../Components/TopApps";
import SkeletonLoading from "../Components/SkeletonLoading";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <States></States>
      <TopApps></TopApps>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router";
import Heroimg from '../assets/hero.png'

import Playstore from '../assets/playstore.png'
import Appstore from '../assets/appstore.png'

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:6 lg:8">
      <div className="text-center mt-20 mb-10 space-y-8">
        <h1 className="text-5xl font-semibold text-[#001931] max-w-[400px] mx-auto">We Build <span className="font-bold gradient-text">Productive</span> Apps</h1>
        <p className="max-w-[750px] mx-auto text-[#627382]">At AppCorner , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="space-x-3 text-[##001931] font-semibold">
            <Link className="btn " to={'https://play.google.com/'}><img className="w-7" src={Playstore} alt="" /> Google Play</Link>
            <Link className="btn" to={'https://www.apple.com/app-store/'}><img className="w-7" src={Appstore} alt="" /> App Store</Link>
        </div>
      </div>
      <img className="mx-auto md:max-w-[680px]" src={Heroimg} alt="" />
    </div>
  );
};

export default Banner;

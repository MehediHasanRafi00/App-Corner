import React from 'react';
import logo from '/logo.png'
const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[calc(100vh-349px)] text-gray-900 ">
  <div>
    <h1 className="text-xl md:text-7xl font-bold flex items-center text-gray-600">L <img className='animate-spin w-30 opacity-80' src={logo} alt="" /> ading . . .</h1>
  </div>
</div>
    );
};

export default LoadingSpinner;
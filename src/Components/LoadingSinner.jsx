import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[calc(100vh-349px)] text-gray-900 ">
  <div>
    <MoonLoader color='#642fe3'/>
  </div>
</div>
    );
};

export default LoadingSpinner;
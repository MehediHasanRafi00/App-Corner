import React from "react";

const SkeletonLoading = ({count = 8}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex  flex-col gap-4">
          <div className="skeleton h-[340px] w-full"></div>
          <div className="skeleton h-4 w-30"></div>
          <div className="flex justify-between">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading;

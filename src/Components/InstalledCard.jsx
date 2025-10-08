import React from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { formatNumber } from "../Utils/FormatNumber";

const InstalledCard = ({ app, handleUninstallData }) => {
  const { image, title, size, ratingAvg, downloads } = app;
  const convertedDownloads = formatNumber(downloads)
  return (
    <div className="rounded-lg bg-white shadow flex justify-between items-center p-4">
      <div className="flex items-center gap-4  ">
        <div>
          <img className="w-16 rounded-xl" src={image} alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-3">{title}</h2>
          <div className="flex gap-4 items-center">
            <span className="flex text-[#00D390] font-medium">
              <MdOutlineFileDownload size={20} /> {convertedDownloads}
            </span>
            <span className="flex text-[#FF8811] font-medium">
              <IoIosStar size={20} />
              {ratingAvg}
            </span>
            <span className="font-medium text-[#627382]">{size}MB</span>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleUninstallData(app)  }
          className="btn bg-[#00D390] text-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledCard;

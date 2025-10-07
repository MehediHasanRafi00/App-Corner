
import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const AppsCard = ({app}) => {
    const{image,title,ratingAvg,downloads} = app
    return (
        <Link  className='p-4 shadow-lg rounded bg-white space-y-3 group'>
            <img className='w-full rounded-xl mx-auto group-hover:scale-103 duration-500 transition ease-in-out ' src={image} alt="" />
            <h3 className='text-xl font-medium'>{title}</h3>
            <div className='flex justify-between items-center'>
                <span className='badge badge-soft badge-success rounded py-2 font-medium'><FiDownload />{downloads}</span>
                <span className='badge  bg-[#FFF0E1] text-[#FF8811] rounded py-2 font-medium'> <IoIosStar />{ratingAvg}</span>
            </div>
        </Link>
    );
};

export default AppsCard;
import React from 'react';

const States = () => {
    return (
        <div className='text-center gradient-bg py-20 space-y-6'>
            <h2 className='font-semibold text-4xl '>Trusted by Millions, Built for You</h2>
            <div className='flex  flex-col md:flex-row flex-wrap gap-10 justify-around items-center max-w-5xl mx-auto'>
                <div className='space-y-3'>
                    <p>Total Downloads</p>
                    <p className='font-extrabold text-5xl'>29.6M</p>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-3'>
                    <p>Total Reviews</p>
                    <p className='font-extrabold text-5xl'>906K</p>
                    <p>46% more than last month</p>
                </div>
                <div className='space-y-3'>
                    <p>Active Apps</p>
                    <p className='font-extrabold text-5xl'>132+</p>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default States;
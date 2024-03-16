import React from 'react';

const End = () => {
    return (
        <div className='bg-[#F7FDFF] space-y-8 p-8'>
            <div className='space-y-2'>
                <div className='flex items-center space-x-1 text-2xl font-medium'>
                    <p>Your </p>
                    <p className='text-[#8064A2]'>Hobby, </p>
                    <p>Your </p>
                    <p className='text-[#0096C8]'>Community...</p>
                </div>
                <button className='bg-[#8064A2] text-white px-4 py-1 rounded-lg'>Get Started</button>
            </div>
            <div className='flex items-center'>
                <img src='/image1.png' className='w-full md:h-80' alt="End Image" />
            </div>
        </div>
    );
};

export default End;
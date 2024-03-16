import React from 'react';
import { IoMdPeople } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { HiMiniMapPin } from "react-icons/hi2";
import { FaCalendarCheck } from "react-icons/fa";

const Feature = () => {
    return (
        <div className='flex flex-col md:flex-row border h-auto md:h-[32rem] items-center justify-center space-y-8 md:space-y-0 md:space-x-4'>
            <div className='w-full md:w-2/5 space-y-4'>
                <div className='border border-[#8064A2] hover:bg-[#8064A2] hover:text-white p-4 space-y-4 rounded-xl'>
                    <div className='flex items-center space-x-3'>
                        <IoMdPeople className='text-2xl text-[#8064A2]' />
                        <p className='text-xl font-bold'>People</p>
                    </div>
                    <div className="font-normal">
                        Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
                    </div>
                    <button className='border border-[#8064A2] text-[#8064A2] px-3 py-1 rounded-xl'>connect</button>
                </div>

                <div className='border border-[#C0504D] hover:bg-[#C0504D] hover:text-white p-4 space-y-4 rounded-xl'>
                    <div className='flex items-center space-x-3'>
                        <FaBagShopping className='text-2xl text-[#C0504D]' />
                        <p className='text-xl font-bold'>Product</p>
                    </div>
                    <div className="font-normal">
                        Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or from community members.
                    </div>
                    <button className='border border-[#8064A2] text-[#8064A2] px-3 py-1 rounded-xl'>Get it</button>
                </div>
            </div>

            <div className='w-full md:w-2/5 space-y-4'>
                <div className='border border-[#77933C] hover:bg-[#77933C] hover:text-white p-4 space-y-4 rounded-xl'>
                    <div className='flex items-center space-x-3'>
                        <HiMiniMapPin className='text-2xl text-[#77933C]' />
                        <p className='text-xl font-bold'>Place</p>
                    </div>
                    <div className="font-normal">
                        Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
                    </div>
                    <button className='border border-[#8064A2] text-[#8064A2] px-3 py-1 rounded-xl'>Meet up</button>
                </div>
                <div className='border p-4 space-y-4 rounded-xl border-[#0096C8] hover:bg-[#0096C8] hover:text-white'>
                    <div className='flex items-center space-x-3'>
                        <FaCalendarCheck className='text-2xl text-[#0096C8]' />
                        <p className='text-xl font-bold'>Program</p>
                    </div>
                    <div className="font-normal">
                        Find events, meetups, and workshops related to your hobby. Register or buy tickets online.
                    </div>
                    <button className='border border-[#8064A2] text-[#8064A2] px-3 py-1 rounded-xl'>Attend</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;
import React from 'react';
import { FaPlusCircle } from "react-icons/fa";

const Add = () => {
    return (
        <div className='flex items-center h-auto md:h-96 justify-center bg-[#F7FDFF]'>
            <div className='bg-white rounded-xl p-4 space-y-6 border w-full md:w-11/12 md:max-w-2xl'>
                <div className='flex items-center space-x-2'>
                    <div><FaPlusCircle className='bg-[text] text-[#0096C8] h-8 w-8 rounded-lg' /></div>
                    <p className='font-bold text-xl'>Add Your Own</p>
                </div>
                <div>
                    <p className='font-light text-lg'>Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
                </div>
                <div className='border px-3 py-1 w-fit rounded-xl border-black'>
                    Add New
                </div>
            </div>
        </div>
    );
};

export default Add;
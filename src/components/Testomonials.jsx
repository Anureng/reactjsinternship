import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaMicrophone } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";

const Testomonials = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center h-auto md:h-[32rem]'>
            <div className='bg-[#F7F5F9] w-full md:w-4/5 p-4 space-y-8 rounded-lg'>
                <div className='flex items-center space-x-2'>
                    <FaQuoteLeft className='bg-[#8064A2] text-white text-3xl p-1 rounded-full' />
                    <p className='text-xl font-bold'>Testimonials</p>
                </div>
                <div className='font-light'>
                    In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured are going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='bg-[#CCC1DA] flex items-center w-full md:w-3/5 space-x-6 p-3 rounded-lg'>
                        <TbPlayerPlayFilled className='border text-3xl rounded-full p-1 bg-white text-[#8064A2]' />
                        <div className='flex items-center'>
                            <FaCircle className='w-2 h-2 text-[#8064A2]' />
                            <hr className="h-px bg-gray-900 border-0 w-36  lg:w-80" />
                        </div>
                        <p className='ml-4'>0:00</p>
                        <div className='flex items-center relative w-12 justify-center'>
                            <FaMicrophone className='text-white absolute h-5 w-5 mt-4 md:mr-8' />
                            <img className='h-10 w-10 md:h-10 md:w-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/ab9f/15ee/2bc87a41926b207ab3c50bc70b9bd0c4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcCaZvmMNT5NU5NKhsR7MOZnWn6aCMqCO0TA1xteLH~37x13ozgciWbLCfX49wR6HzNQsXK2en6TvbOE4zd7bhB-f64SmgJ9nbpzR34l0uHsz3D-Owe4JuY0iGb1vtGGeaQE8N7e6Wias988XqtY9ScIY~neZq5svolNxwUX7JRvRhyy4x-pJbs03qXjYM4CVD3UkREgdx3wxzWDGGrNsg6MCXYt-PzStnMdkVmlLaZN3TDe74XhKyUbpnpBr3ZYQG1qiL9AcK9n5S5Q-bgbp3MBkTonmnSUBFznSySot1ugAjW73wr867evDUn93eVGb1k5juvo2XbXmA3rDGe1BQ__" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:space-x-3 items-center justify-center mt-4 md:mt-0'>
                        <img className='h-20 w-20 md:h-20 md:w-20 rounded-full' src="https://s3-alpha-sig.figma.com/img/ab9f/15ee/2bc87a41926b207ab3c50bc70b9bd0c4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcCaZvmMNT5NU5NKhsR7MOZnWn6aCMqCO0TA1xteLH~37x13ozgciWbLCfX49wR6HzNQsXK2en6TvbOE4zd7bhB-f64SmgJ9nbpzR34l0uHsz3D-Owe4JuY0iGb1vtGGeaQE8N7e6Wias988XqtY9ScIY~neZq5svolNxwUX7JRvRhyy4x-pJbs03qXjYM4CVD3UkREgdx3wxzWDGGrNsg6MCXYt-PzStnMdkVmlLaZN3TDe74XhKyUbpnpBr3ZYQG1qiL9AcK9n5S5Q-bgbp3MBkTonmnSUBFznSySot1ugAjW73wr867evDUn93eVGb1k5juvo2XbXmA3rDGe1BQ__" alt="" />
                        <div className='text-[#8064A2] text-sm'>
                            <p>Shubha Nagarajan</p>
                            <p>Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testomonials;
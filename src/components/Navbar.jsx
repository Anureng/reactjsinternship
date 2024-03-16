import React, { useEffect, useState } from 'react';
import { BsBellFill } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaCartShopping } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { IoBookmarkSharp } from 'react-icons/io5';
import { MdExplore, MdStars } from 'react-icons/md';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900); // Adjust the threshold as needed
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex flex-col md:flex-row items-center justify-evenly p-1 shadow-lg'>
            {/* Your existing JSX code for the Navbar */}

            {/* Conditionally render mobile data */}
            {isMobile && (
                <div className='flex items-center justify-between p-3 border w-full'>
                    {/* Your mobile-specific data goes here */}
                    <img src="/mobile.png" className='h-10 w-10' alt="" />
                    <div className='text-[#8064A2] items-center justify-center flex space-x-3 text-lg'>
                        <CiSearch />
                        <BsBellFill />
                        <RxHamburgerMenu />
                    </div>
                </div>
            )}

            {/* Conditionally render non-mobile data */}
            {!isMobile && (
                <div className='flex items-center md:justify-evenly p-1 w-full  shadow-lg '>
                    <img className='w-72 h-16' src="https://s3-alpha-sig.figma.com/img/153c/f988/785cdcec05510cbdc9cb1b82a17b77fc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6eD0TCCyQD1FqcNaf-tDNV6e~sJMa-jiSFacpyn5Xi~QLa3nO7DhLjaNAxvLwkiLRDWC~OwMtGA2litWF-K0zDvZsSkSZzoZQmhMmQvIZ06XpZdJwrFDAeG-Qte6awSq20VCLxbUYukIOMY2Uy5t-Uwad3zbHO3EW~qsdPeKQRTHOR7n1NOIIHhhl~f8R95XNIgff5mpCttw~J2SahXwMuYvLcJlMbFhUCk3zvljqbyLvPxFvxsedHnPdxzdAf5kkD4nwbsoawxIFus~skDmMKwI~915FyUQEZBiYqR8sxaCg~qDNFwcm7UY8Bwgc2kdY2FVi-WoKGG6uGNZrutXQ__" alt="" />
                    <div className='flex h-8  border rounded-lg'>
                        <div className=' w-64 flex items-center px-2 py-1  '>
                            <input type="text" placeholder='Search here...' className='focus:outline-none ' />
                        </div>
                        <div className='bg-[#8064A2]  w-fit px-3 py-2 border-lg flex items-center justify-center text-white'>
                            <CiSearch />
                        </div>
                    </div>
                    <div className='flex items-center lg:space-x-8'>
                        <div className='flex items-center justify-center'>
                            <MdExplore className='bg-white rounded-xl  w-6 h-6 text-[#8064A2]' />
                            <p>Explore</p>
                            <IoIosArrowDown />
                        </div>
                        <div className='flex items-center justify-center'>
                            <MdStars className='bg-white rounded-xl  w-6 h-6 text-[#8064A2]' />
                            <p>Hobbies</p>
                            <IoIosArrowDown />
                        </div>
                        <BsBellFill className='bg-white rounded-xl  w-6 h-6 text-[#8064A2]' />
                        <FaCartShopping className='bg-white rounded-xl  w-6 h-6 text-[#8064A2]' />
                        <IoBookmarkSharp className='bg-white rounded-xl  w-6 h-6 text-[#8064A2]' />
                    </div>
                    <p className='border px-4 py-2 rounded-xl '>Sign In</p>
                </div>

            )}
        </div>
    );
}

export default Navbar;
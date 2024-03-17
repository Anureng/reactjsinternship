import React, { useState } from 'react';

const Login = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='bg-[#F7F5F9] flex flex-col lg:flex-row p-4'>
            <div className='lg:w-3/5 flex flex-col justify-center space-y-6 p-4 lg:p-0'>
                <div className='space-y-6'>
                    <div className='flex items-center text-3xl space-x-3'>
                        <p>Explore your</p>
                        <p className='text-[#0096C8]'>hobby</p>
                        <p>or</p>
                        <p className='text-[#8064A2]'>passion</p>
                    </div>
                    <p className='font-light'>
                        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                    </p>
                    <p className='font-light'>
                        If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                    </p>
                </div>

                <div>
                    <img src="/image2.png" className='h-52' alt="" />
                </div>
            </div>

            <div className='lg:w-2/5 p-4'>
                <div className='mx-auto'>
                    <div className='flex border-b border-gray-200'>
                        <button
                            onClick={() => handleTabClick('login')}
                            className={`${activeTab === 'login'
                                ? 'border-b-2 border-blue-500'
                                : ''
                                } py-2 px-4 font-semibold focus:outline-none`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => handleTabClick('Join In')}
                            className={`${activeTab === 'Join In'
                                ? 'border-b-2 border-blue-500'
                                : ''
                                } py-2 px-4 font-semibold focus:outline-none`}
                        >
                            Join Up
                        </button>
                    </div>
                    <div className='mt-8'>
                        {activeTab === 'login' && (
                            <div className='space-y-4'>
                                <div className='flex flex-col space-y-3' >
                                    <button className='border rounded-lg p-2 border-black font-medium flex items-center justify-around'>
                                        <img src="/google.png" alt="" className='w-5 h-5' />
                                        Continue with Google
                                        <button></button>
                                    </button>
                                    <button className='border rounded-lg p-2 border-black font-medium flex items-center justify-around'>
                                        <img src="/facebook.png" alt="" className='w-6 h-6' />
                                        Continue with Facebook
                                        <button></button>
                                    </button>
                                </div>
                                <p className='flex items-center justify-center'>
                                    <hr className="h-px bg-gray-900 border-0  w-40 md:w-54" /> or connect with
                                    <hr className="h-px bg-gray-900 border-0 w-40 md:w-54" />
                                </p>
                                <input className='flex p-2 focus:outline-none rounded-lg w-full' type="text" placeholder='Email' />
                                <input className='flex p-2 focus:outline-none rounded-lg w-full' type="password" placeholder='Password' />
                                <div className='flex items-center justify-between'>
                                    <label className="text-xs">
                                        <input type="checkbox" className="mr-1" />
                                        Remember me
                                    </label>
                                    <p className="text-xs cursor-pointer">Forgot Password</p>
                                </div>
                                <button className='border flex items-center justify-center w-full p-2 rounded-lg border-black'>Continue</button>
                            </div>
                        )}
                        {activeTab === 'Join In' && (
                            <div className='space-y-4'>
                                <div className='flex flex-col space-y-3' >
                                    <button className='border rounded-lg p-2 border-black font-medium flex items-center justify-around'>
                                        <img src="/google.png" alt="" className='w-5 h-5' />
                                        Continue with Google
                                        <button></button>
                                    </button>
                                    <button className='border rounded-lg p-2 border-black font-medium flex items-center justify-around'>
                                        <img src="/facebook.png" alt="" className='w-6 h-6' />
                                        Continue with Facebook
                                        <button></button>
                                    </button>
                                </div>
                                <p className='flex items-center justify-center'> <hr className="h-px bg-gray-900 border-0  w-40 md:w-54" /> or connect with
                                    <hr className="h-px bg-gray-900 border-0 w-40 md:w-54" /></p>
                                <input className='flex p-2 focus:outline-none rounded-lg w-full' type="text" placeholder='Email' />
                                <input className='flex p-2 focus:outline-none rounded-lg w-full' type="password" placeholder='Password' />
                                <div className='flex items-center justify-between text-xs font-light'>
                                    By continuing, you agree to our Terms of Service and Privacy Policy.
                                </div>
                                <button className='border flex items-center justify-center w-full p-2 rounded-lg  bg-[#8064A2] text-white'>Agree And Continue</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
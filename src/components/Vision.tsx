'use client';

import React from 'react';
import { VISION_DATA } from '../../utils/helper';
 
const VisionSection = () => {
    return (
        <section className="bg-blue -mt-2 text-white text-center">
            <div className="conatiner max-w-[1140px] mx-auto px-4">
                <div className="flex items-center md:justify-center">
                    <h2 className="relative md:text-5xl text-4xl font-[900] text-center lg:pb-[90px] pb-10 whitespace-nowrap bg-gradient-to-b from-purple via-dark-pink to-dark-orange text-transparent bg-clip-text">
                        THE VISION
                        <span className="absolute -top-[2px] !whitespace-nowrap left-[2px] text-white">
                            THE VISION
                        </span>
                    </h2>
                </div>

                <div className="flex max-lg:flex-wrap gap-6  justify-center">
                    {VISION_DATA.map((item , index) => (
                        <div key={item.id} className='bg-gradient-to-b from-purple via-dark-pink max-lg:mt-10 to-dark-orange p-[1px] relative  rounded-lg text-sm '>
                            <div
                                className={`relative p-6 px-7 pt-0 rounded-lg text-sm group hover:bg-gradient-to-b from-purple via-dark-pink to-dark-orange bg-[#121429] w-full h-full transition-all duration-500`}
                            >
                                <div className='bg-gradient-to-b from-purple via-dark-pink to-dark-orange p-1 rounded-full absolute -top-[3.10rem] !text-[40px] left-1/2 transform -translate-x-1/2 size-[97px]'>
                                    <div className="absolute top-[0.5px] !text-[40px] left-1/2 transform -translate-x-1/2 size-24 flex items-center justify-center rounded-full bg-[#121429] group-hover:bg-gradient-to-b from-purple via-dark-pink to-dark-orange font-bold">
                                        {item.id}
                                    </div>
                                </div>
                                <p className="text-base text-white leading-[170%] pt-[90px] max-w-[312px] text-center mx-auto">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </section>
    );
};

export default VisionSection;
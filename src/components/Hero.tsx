
import React from 'react'
import Header from "./common/Header"
import CustomButton from './common/CustomButton'
const Hero = () => {
    return (
        <div className='bg-center bg-cover bg-no-repeat md:min-h-screen 2xl:min-h-fit relative pb-20' style={{ backgroundImage: `url(/assets/images/webp/hero-bg.webp)` }}>
            <Header />
            <div className="container max-w-[1140px] mx-auto">
                <img className='lg:max-w-[404px] md:max-w-[388px] max-w-[256px] mx-auto md:pt-[170px] pt-[175px]' src="./assets/images/webp/logo-tag.webp" alt="hero-image" />
                <div className="flex items-center justify-center">
                    <h1 className="relative md:text-8xl text-customSm font-[900] md:mt-8 mt-[108px] bg-gradient-to-b from-purple via-dark-pink to-dark-orange text-transparent bg-clip-text">
                        SMERSE
                        <span className="absolute -top-[2px] left-[2px] text-white">
                            SMERSE
                        </span>
                    </h1>
                </div>

                <p className='text-white text-center font-semibold md:text-4xl text-xl max-w-[637px] mx-auto md:pt-[10px] pt-[27px] leading-customXl'>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
                </p>
                <CustomButton text="Get Started" myClass=" md:!px-[33px] md:!py-[14px] !py-3 !px-5 !flex !mx-auto md:mt-11 max-sm:!mb-[85px] mt-[82px] hover:!scale-105" />
            </div>
            <img className='absolute bottom-0 h-10 w-full' src="./assets/images/webp/hero-bottom-line.webp" alt="bottom-line" />
        </div>
    )
}

export default Hero
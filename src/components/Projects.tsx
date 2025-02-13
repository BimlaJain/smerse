import React from 'react'

const Project = () => {
    return (
        <div className='bg-blue xl:pt-[130px] pt-20 pb-[60px]'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <div className="lg:flex justify-between">
                    <div className='xl:max-w-[560px] max-xl:mx-auto max-xl:w-full lg:pt-[115px]'>
                        <div className="flex items-center">
                            <h2 className="relative md:text-5xl text-4xl font-[900] whitespace-nowrap bg-gradient-to-b from-purple via-dark-pink to-dark-orange text-transparent bg-clip-text">
                                THE PROJECT
                                <span className="absolute -top-[2px] !whitespace-nowrap left-[2px] text-white">
                                    THE PROJECT
                                </span>
                            </h2>
                        </div>
                        <div className='flex items-start gap-5 pb-2 pt-7 xl:max-w-[510px]'>
                            <img src="./assets/images/svg/nft.svg" alt="nft" />
                            <p className='font-normal text-base leading-customXl text-white '>NFT Avatars make up the core of the Smerse Project on the Ethereum Blockchain. Each male or female Avatar is unique itself & come with different traits upon minting & can further be customized with future additions on our In-App Marketplace.</p>
                        </div>
                        <div className='flex items-start gap-5 pb-2 xl:max-w-[510px]'>
                            <img src="./assets/images/svg/hand.svg" alt="hand" />
                            <p className='font-normal text-base leading-customXl text-white '>Users will be able participate in various tasks to obtain augmented awards, airdrops, and special in-game incentives. Quests would be divided into daily, weekly, monthly, & special event categories. Each type will have its own set of benefits that contribute to playability & long-term engagement.</p>
                        </div>
                        <div className='flex items-start gap-5 pb-2 xl:max-w-[510px]'>
                            <img src="./assets/images/svg/target.svg" alt="target" />
                            <p className='font-normal text-base leading-customXl text-white '>Finally, players can earn marketable NFTs by completing various achievement goals, such as PvP and grinding times, which serves to generate a feeling of purpose inside the game rather than users merely playing for the sake of playing.</p>
                        </div>

                    </div>
                    <img className='max-w-[471px] w-full max-lg:mx-auto max-sm:pt-3' src="./assets/images/webp/project-girl.png" alt="girl" />
                </div>
            </div>
        </div>
    )
}

export default Project
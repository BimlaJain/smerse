import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "../../../utils/helper";
import CustomButton from "./CustomButton";

interface HeaderItem {
    title: string;
    link: string;
}

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <div className="bg-light-black/50">
            <div className="container max-w-[1140px] mx-auto px-4 flex items-center justify-between md:py-4 py-[5px]">
                <a href="/">
                    <img
                        src="./assets/images/png/logo.png"
                        alt="logo"
                        className="md:size-[68px] size-10 pointer-events-none"
                    />
                </a>
                <ul className="flex items-center gap-5 max-lg:hidden">
                    {HEADER_LIST.map((item: HeaderItem, i: number) => (
                        <li key={i}>
                            <a
                                href={item.link}
                                className="font-semibold text-white text-base relative after:absolute after:h-[2px] after:w-0 after:bg-white after:left-0 hover:after:w-full after:bottom-0 after:transition-all after:duration-300"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-[10px] max-lg:gap-1 max-lg:hidden">
                    <CustomButton text="Mint Now" myClass="hover:!scale-105" />
                </div>
                <div
                    className="lg:hidden z-50 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <button className="overflow-hidden relative z-50 lg:hidden size-6 max-sm:h-5 flex flex-col justify-between items-center">
                        <span
                            className={`bg-white rounded-full w-6 h-1 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}
                        ></span>
                        <span
                            className={`bg-white rounded-full after:rounded-lg w-6 h-1 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-white" : ""
                                }`}
                        ></span>
                        <span
                            className={`bg-white rounded-full w-6 h-1 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}
                        ></span>
                    </button>
                </div>
            </div>
            <div
                className={`w-full h-full bg-black transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-5 flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
                    }`}
            >
                {HEADER_LIST.map((item: HeaderItem, i: number) => (
                    <a
                        key={i}
                        onClick={() => setOpen(false)}
                        href={item.link}
                        className="font-semibold text-base text-white"
                    >
                        {item.title}
                    </a>
                ))}
                <CustomButton
                    customOnClick={() => setOpen(false)}
                    text="Mint Now"
                    myClass="bg-black !text-white px-[24.83px] py-[10px] max-lg:py-2 hover:!scale-105"
                />
            </div>
        </div>
    );
};

export default Header;

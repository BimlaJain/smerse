import React from "react";

interface CustomButtonProps {
    text: string;
    myClass?: string;
    customOnClick?: () => void;

}

const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "", customOnClick, }) => {
    return (
        <button
            onClick={customOnClick}
            className={`text-xl font-extrabold py-[11px] pl-[25px] pr-[23px] shadow-[0px_4px_4px_0px_#ff676b33] text-white rounded-lg transition-all duration-500 relative bg-gradient-to-b from-purple via-dark-pink to-dark-orange ${ myClass }
`}
        >
    { text }
        </button >
    );
};

export default CustomButton;
import { IoIosArrowUp, IoIosArrowDown  } from "react-icons/io";
import { useState, useRef, useEffect } from 'react' 

export default function DropMenu({ label, options, selectedOption, onOptionSelect }){
    const [isOpen, setIsOpen] = useState(false);
    const dropMenuRef = useRef(null);

    const handleOptionClick = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropMenuRef.current && !dropMenuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block center">
            <span className=" text-White/60 text-[14px] sm2:text-base">{label}:</span>
            <div className="flex items-center justify-between px-[10px] rounded-lg bg-none cursor-pointer text-[14px] sm2:text-base" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption} <span className="ml-[4px]" >{isOpen ? <IoIosArrowUp color="#ACA08C"/> : <IoIosArrowDown color="#ACA08C"/>}</span>
            </div>
            {isOpen && (
                <div className="absolute top-full right-[10%] bg-[#aca08ca3] backdrop-blur-[10px] rounded-lg mt-1 z-10 min-w-min overflow-hidden" ref={dropMenuRef}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`p-[10px] cursor-pointer hover:bg-[#7b7b7b57] flex ${option === selectedOption ? 'text-White font-medium' : 'text-White/70'}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
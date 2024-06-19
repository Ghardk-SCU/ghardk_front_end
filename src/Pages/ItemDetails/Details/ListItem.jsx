import { GoDotFill } from "react-icons/go";

export default function ListItem({label, text}){
    return (
        <li className='text-[18px] flex items-center gap-3 hyphens-auto break-words w-full'>
                < GoDotFill size={16}/>
                <span className="hyphens-auto break-words font-medium">{`${label}:`} <span className='font-normal ml-2 text-Black/75 hyphens-auto break-words w-full'>{`${text}`}</span></span>
            </li>
    );
}
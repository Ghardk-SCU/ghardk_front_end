import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Cardlayout({ details, top }) {
  const [isFavorite, setIsFavorite] = useState(details.isFavorite)
  const { rating, rating_count: totalRates, image_url: img, description: discreption, user_name: name } = details;
  return (
    <div
      style={{
        background: top % 2 ? 'rgba(253, 191, 80, 0.07)' : 'rgba(244, 244, 248, 0.07)'
      }}
      className='grid grid-cols-12 rounded-3xl py-3 px-3'>
      <div style={{
        background: 'linear-gradient(117.26deg, rgba(244, 244, 248, 0.6) 45.53%, #FDBF50 119.63%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }} className='col-span-2 sm2:col-span-1 center text-white NunitoSans text-2xl font-bold md:pr-4'>#{top < 10 && '0'}{top}
      </div>
      <div className='col-span-8 sm2:col-span-9 md:col-span-2 items-center justify-center  text-white flex gap-x-4 md:pr-4'>
        <img style={{ boxShadow: '0px 0px 22.4px 0px rgba(253, 191, 80, 0.15)' }} src={img} className="hidden xl:block rounded-full size-14" alt="" />
        <p className="pl-5">{name}</p>
      </div>
      <div title={discreption} className='hidden md:flex col-span-8 w-full items-center text-white md:pr-4'>
        <p className="truncate px-5">
          {discreption}
        </p>
      </div>
      <div className='col-span-1 center text-white flex gap-x-[2px] md:pr-4'>
        <FaStar className="mr-2" size={20} />
        <p>{rating ? (rating / totalRates).toFixed(2) : 0}</p>
        <p className="text-xs">({totalRates})</p>
      </div>
    </div >
  )
}
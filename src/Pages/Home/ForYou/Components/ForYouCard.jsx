import { useState, useEffect } from 'react'
import Giraffe from '../../../../assets/giraffe.png'
import { FaRegStar, FaRegHeart } from 'react-icons/fa'
import { BsCartPlus } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import placeholder from '../placeholder.jpg'


export default function ForYouCard({ item }) {
	console.log({ item })
	const img = item.images[0]?.image_url || placeholder
	const StarCounter = ({ rating, color, size, fill }) => {
		let stars = []
		for (let i = 0; i < 5; i++) {
			if (rating >= i + 1) {
				stars.push(<FaStar size={size} key={i} className={`${fill}`} />)
			} else if (rating > i && rating < i + 1) {
				// if there is a half star
				stars.push(<FaStarHalfAlt size={size} key={i} className={`${fill}`} />)
			} else {
				stars.push(<FaRegStar size={size} key={i} className={`${color}`} />)
			}
		}
		return (
			<div className='flex items-center font-thin'>
				{stars}
			</div>
		)
	}
	return (
		<>
			<section className='relative w-full md:w-[70%] h-[270px] lg:h-[40vh] lg:w-3/4 bg-Beige2 center rounded-2xl flex-col overflow-hidden border-[10px] border-Beige2 shadow-xl'>
				<div className="relative upperContent w-[99%] h-full basis-[60%] center rounded-2xl overflow-hidden mt-2">
					<div className="vendorInfo w-2/5 h-full center flex-col">
						<div className='w-16 h-16 rounded-full overflow-hidden shadow-md border border-Black/10'>
							<img src={item.vendor_image_url} className='w-[100%] h-full' alt='LoadingImg' />
						</div>
						<h3 className='Fredoka text-sm text-Black font-normal mt-auto'>{item.vendor_user_name}</h3>
					</div>
					<div className="vendorStatus w-full h-full flex flex-col items-end justify-center pr-[6px]">
						<div className='center w-12 h-12 rounded-full overflow-hidden shadow-md border border-Black/10 bg-White'>
							<FaRegHeart size={24} className='w-[100%] text-black/80' />
						</div>
						<div className='center gap-1 mt-auto'>
							<span className='Fredoka text-sm text-Black font-base'>{item.vendor_rating ? (item.vendor_rating / item.vendor_rating_count).toFixed(2) : 0}</span>
							<span className='Fredoka text-[12px] text-Black font-normal self-end'>({item.vendor_rating_count})</span>
							<StarCounter rating={item.vendor_rating ? (item.vendor_rating / item.vendor_rating_count).toFixed(2) : 0} fill="text-black" color="text-[#101010]" size={25} />
						</div>

					</div>
				</div>
				<div className="relative lowerContent bg-White w-full h-full bg-center center rounded-2xl overflow-hidden mt-4">
					<div className="itemImage w-full h-full basis-[40%] overflow-hidden">
						<img src={img} className='object-cover w-[100%] h-full' alt='LoadingImg' />
					</div>
					<div className="itemData w-full h-full center flex-col p-3">
						<div className='w-full h-full flex flex-col'>
							<h3 className='Fredoka text-lg text-Black font-medium w-[calc(100%-20px)]'>{item.name}</h3>
							<p className='Fredoka text-sm text-Black/60 font-normal w-[100%] line-clamp-2'>
								{item.description}
							</p>
						</div>
						<div className='w-full h-full basis-[70%] center'>
							<div className='w-full h-full flex flex-col'>
								<div className='w-full h-full flex'>
									<h3 className='Fredoka text-[16px] text-Black font-medium inline-block m-0 mr-2 self-end'>Price:</h3>
									<span className='Fredoka text-[16px] text-Black font-medium inline self-end'>{`${item.price} EGP`}</span>
								</div>
								<div className='center gap-1 mt-auto self-start'>
									<span className='Fredoka text-sm text-Black font-base'>{item.vendor_rating ? (item.vendor_rating / item.vendor_rating_count).toFixed(2) : 0}</span>
									<span className='Fredoka text-[12px] text-Black font-normal self-end'>(1024)</span>
									<StarCounter rating={item.vendor_rating ? (item.vendor_rating / item.vendor_rating_count).toFixed(2) : 0} fill="text-[#FF724C]" color="text-[#FF724C]/80" size={15} />
								</div>
							</div>
							<div className='w-full h-full basis-[60%] flex justify-end align-middle content-center'>
								<div className='center w-12 h-12 rounded-[16px] overflow-hidden shadow-md border border-Black/10 bg-Beige2'>
									<BsCartPlus size={26} className='w-[100%] text-black/80' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
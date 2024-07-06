import { useState, useContext, useEffect, useRef } from 'react'
import { FaRegStar, FaRegHeart } from 'react-icons/fa'
import { BsCartPlus } from "react-icons/bs";
import { FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa'
import Fetch from '../../../../Components/CustomHooks/Fetch'
import { addFav, delFavByProId, addItemToCart } from '../../../../Store/urls'
import { AuthenticationContext } from '../../../../Store/Context/Authentication'
import { motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion'
import placeholder from '../placeholder.jpg'


export default function ForYouCard({ item }) {
	const [favourite, setFavourite] = useState(item.isFavourite)
	const [fav, setFav] = useState(null)
	const [cart, setCart] = useState(null)
	const { Token } = useContext(AuthenticationContext)
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
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

	const handleFavorite = async () => {
		if (loading) return;
		setLoading(true)
		if (favourite) {
			await Fetch({
				url: delFavByProId(item.id),
				setLoading,
				setData: setFav,
				setErrorMessage,
				method: 'DELETE',
				Token
			})
			setFavourite(prev => !prev);
		} else {
			Fetch({
				url: addFav(),
				setLoading,
				setData: setFav,
				setErrorMessage,
				method: 'POST',
				body: { product_item_id: item.id },
				Token
			})
		}
	}

	const addToCart = () => {
		if (loading || item.quantity === 0) return;
		setLoading(true)
		setErrorMessage('')
		Fetch({
			url: addItemToCart(item.id),
			setLoading,
			setData: setCart,
			setErrorMessage,
			method: 'POST',
			body: { quantity: 1 },
			Token
		})
	}

	useEffect(() => {
		if (fav && fav.status === 'success') {
			setFavourite(prev => !prev);
		}
	}, [fav])

	return (
		<>
			<section className='lg:scale-[1.1] relative w-full md:w-[70%] h-[270px] sm:h-[370px] lg:h-[40vh] lg:w-3/4 bg-Beige2 center rounded-2xl flex-col overflow-hidden border-[10px] border-Beige2 shadow-xl'>
				<div className="relative upperContent w-[99%] h-full basis-[60%] center rounded-2xl overflow-hidden mt-2">
					<div className="vendorInfo w-2/5 h-full center flex-col">
						<div className='flex-grow  rounded-full overflow-hidden shadow-md border border-Black/10'>
							<img src={item.vendor_image_url} className='w-full h-full' alt='LoadingImg' />
						</div>
						<h3 className='Fredoka text-sm md:text-[2.3vh] text-Black font-normal'>{item.vendor_user_name}</h3>
					</div>
					<div className="vendorStatus w-full h-full flex flex-col items-end justify-center pr-[6px]">
						<button onClick={handleFavorite} className='center w-12 h-12 rounded-full overflow-hidden shadow-md border border-Black/10 bg-White'>
							{!favourite
								? <FaRegHeart size={24} className='w-[100%] text-black/80' />
								: <FaHeart size={24} className='w-[100%] text-red-500' />
							}
						</button>
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
							<h3 className='Fredoka  text-lg md:text-[3vh] text-Black font-medium w-[calc(100%-20px)] line-clamp-1'>{item.name}</h3>
							<p className='Fredoka  text-sm md:text-[2vh] text-Black/60 font-normal w-[100%] line-clamp-2'>
								{item.description}
							</p>
						</div>
						<div className='w-full h-full basis-[70%] center'>
							<div className='w-full h-full flex flex-col'>
								<div className='w-full h-full flex'>
									<h3 className='Fredoka text-[16px] text-Black font-medium inline-block m-0 mr-2 self-end'>Price:</h3>
									<span className='Fredoka text-[16px] text-Black font-medium inline self-end truncate'>{`${item.price} EGP`}</span>
								</div>
								<div className='center gap-1 mt-auto self-start'>
									<span className='Fredoka text-sm text-Black font-base'>{item.rating ? (item.rating / item.rating_count).toFixed(2) : 0}</span>
									<span className='Fredoka text-[12px] text-Black font-normal self-end'>({item.rating_count})</span>
									<StarCounter rating={item.rating ? (item.rating / item.rating_count).toFixed(2) : 0} fill="text-[#FF724C]" color="text-[#FF724C]/80" size={15} />
								</div>
							</div>
							<div className='w-full h-full basis-[60%] text-center flex justify-end items-center gap-3 align-middle content-center'>
								{item.quantity === 0 && <p className='text-red-500 text-xs'>out of stock*</p>}
								{cart && cart.status !== 'success' && <p className='text-red-500 text-xs'>{errorMessage}</p>}
								{cart && cart.status === 'success' && <p className='text-green-500 text-xs'>added  successfully</p>}

								<button onClick={addToCart} className={`center min-w-12 min-h-12 rounded-[16px] overflow-hidden shadow-md border border-Black/10 bg-Beige2 ${item.quantity === 0 ? "opacity-60 cursor-not-allowed" : ""}`}>
									<BsCartPlus size={26} className='w-[100%] text-black/80' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
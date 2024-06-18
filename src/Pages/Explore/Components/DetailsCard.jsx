import Giraffe from '../../../assets/giraffe.png'
import { FaRegStar, FaRegHeart, FaHeart } from 'react-icons/fa'
import { useState } from 'react'

export default function DetialsCard(){
    const [isFavorite, setIsFavorite] = useState(false);
    
    function handleFavorite(){
        setIsFavorite(prevIsFavorite => !prevIsFavorite);
    }

    return (
        <>
            <div className="relative center w-80 h-96 bg-Beige2 shadow-lg rounded-lg flex-col overflow-hidden group Fredoka border border-Black/15">
                <div className='absolute w-full h-[80px] z-10 -top-[30%] center px-4
                group-hover:top-0 transition-all duration-300 ease-in-out'>
                    <button className='relative px-4 py-2 center bg-White rounded-full z-10 text-Black overflow-hidden text-md Fredoka focus:outline-none cursor-pointer active:scale-95 transition-all duration-300 
                    ease-in-out before:bg-Black before:rounded-full before:absolute before:-z-10 before:left-[calc(50%-4px)] before:top-1/2 before:w-1 before:h-1 before:opacity-0
                    before:hover:w-full before:hover:h-full before:hover:opacity-100 before:hover:top-0 before:hover:left-0 before:transition-all before:duration-300 hover:text-White'>Add to cart</button>
                    <button onClick={handleFavorite} className='center w-10 h-10 rounded-full overflow-hidden shadow-md border border-Black/10 bg-White ml-auto focus:outline-none cursor-pointer'>
                    {
                        isFavorite
                        ? <FaHeart size={24} className='w-[100%] text-[#F20E0E]' />
                        : <FaRegHeart size={24} className='w-[100%] text-black/80' />
                    }

                    </button>
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <span className='w-full h-full bg-Black/10 absolute
                    group-hover:bg-Black/0 transition-all duration-300 ease-in-out'></span>
                    <img src={Giraffe} className='w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out' alt='LoadingImg' />
                </div>
                <div className="w-full h-full basis-1/2">
                    <div className="itemData w-full h-full center flex-col p-3 px-4">
						<div className='w-full h-full flex flex-col'>
							<h3 className='Fredoka text-lg text-Black font-medium w-[calc(100%-20px)]'>Giradasdasffe Soft Toy</h3>
							<p className='Fredoka text-sm text-Black/60 font-normal w-[100%]'>
								Handmade giraffe, crafted from soft cotton for cuddly charm and lifelike detailing.
							</p>
						</div>
						<div className='w-full h-full basis-[70%] center pt-1'>
							<div className='w-full h-full flex justify-center items-center'>
								<div className='w-full h-full flex items-center'>
									<h3 className='Fredoka text-[16px] text-Black font-medium inline-block m-0 mr-2'>Price:</h3>
									<span className='Fredoka text-[16px] text-Black font-medium inline'>{`${50} EGP`}</span>
								</div>
								<div className='center'>
									<span className='Fredoka text-sm text-Black font-base'>3.5</span>
									<span className='Fredoka text-[12px] text-Black font-normal self-end mr-1'>(1024)</span>
									{
										[...Array(5)].map((start, index) => {
											return <FaRegStar key={index} size={16} className='Fredoka text-black/60' />
										})
									}
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </>
    );
}
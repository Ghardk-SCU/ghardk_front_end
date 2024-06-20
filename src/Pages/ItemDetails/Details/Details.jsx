import { useState } from 'react'
import DropMenu from '../../../Components/DropMenu/DropMenu'
import { FaPlus, FaMinus, FaRegStar, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import img1 from '../../../assets/Image1.png'
import img2 from '../../../assets/Image2.png'
import img3 from '../../../assets/Image3.png'
import img4 from '../../../assets/Image4.png'
import ListItem from './ListItem'

export default function Details({ itemDetials, vendorDetails }) {
    const [selectedColor, setSelectedColor] = useState('White');
    const [selectedSize, setSelectedSize] = useState('Medium');
    const [currQuantity, setCurrQuantity] = useState(1);
    const [selectedImg, setSelectedImg] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedTab, setSelectedTab] = useState('vendor');

    function handleFavorite() {
        setIsFavorite(prevIsFavorite => !prevIsFavorite);
    }
    const images = [img1, img2, img3, img4];

    return (
        <>
            <div className='Fredoka min-h-screen h-full w-[95%] bg-Beige flex flex-col md:flex-row gap-8 py-[150px] px-4 overflow-hidden'>
                <div className="relative flex flex-col-reverse lg:flex-row w-full md:w-2/3 h-full gap-4 rounded-xl">
                    <div className="flex items-center lg:flex-col justify-center w-full lg:w-1/3 gap-4">
                        {
                            images.map((img, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImg(idx)}
                                        className={`relative rounded-2xl max-h-[115px] max-w-[115px] min-h-[60px] min-w-[60px] focus:outline-none overflow-hidden border ${selectedImg === idx ? 'border-Black/80 shadow-lg' : 'border-Black/10'}`}>
                                        <img src={img} className='w-full h-full object-cover rounded-2xl' loading='lazy' alt='Thumbnail' />
                                    </button>
                                )
                            })
                        }
                    </div>
                    <div className="w-full h-full rounded-2xl overflow-hidden border shadow-md self-center border-Black/10">
                        <img src={images[selectedImg]} alt="SelectedImage" className='w-full h-full object-cover rounded-2xl' />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-2/4 h-full gap-10">
                    <div className='flex justify-center flex-grow w-full'>
                        <div className='w-full h-full min-h-[140px] flex items-center flex-col gap-10'>
                            <div className='w-full h-full flex justify-start'>
                                <div className='flex justify-start items-start flex-col md:flex-row w-full'>
                                    <h3 className='text-2xl lg:text-3xl font-medium truncate max-w-[calc(100%-40px)]'>{`Boho Bliss Tote Bag`}</h3>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 w-full h-full'>
                                {
                                    [...Array(5)].map((start, index) => {
                                        return <FaRegStar key={index} size={18} className='Fredoka text-black/60' />
                                    })
                                }
                                <span className='text-md text-Black font-base'>3.5</span>
                                <span className='text-sm text-Black font-normal self-end'>(1024)</span>
                            </div>
                        </div>
                        <div className='h-full w-full center self-start flex-col basis-2/4 gap-8'>
                            <div className='flex justify-center items-end w-full h-full'>
                                <span className='text-2xl font-medium ml-auto'>{`${(+itemDetials.price).toFixed(2)}`}</span>
                                <span className='text-[16px] font-medium mb-[1px] self-end'>EGP</span>
                            </div>
                            <button onClick={handleFavorite} className='center w-10 h-10 rounded-full overflow-hidden ml-auto focus:outline-none cursor-pointer'>
                                {
                                    isFavorite
                                        ? <FaHeart size={24} className='w-[100%] text-[#F20E0E]' />
                                        : <FaRegHeart size={24} className='w-[100%] text-black/80' />
                                }
                            </button>
                        </div>
                    </div>
                    <div className="min-w-full h-full flex items-center justify-between gap-x-4 gap-y-1">
                        <div className='flex gap-5 w-full h-min'>
                            <button className='outline-none focus:outline-none active:scale-90 w-full basis-1/12' onClick={() => setCurrQuantity(prevQuan => Math.max(1, prevQuan - 1))}><FaMinus color='#8D8D8D' /></button>
                            <span className='text-xl w-full font-base basis-1/12'>{`${currQuantity}`}</span>
                            <button className='outline-none focus:outline-none active:scale-90 w-full basis-1/12' onClick={() => setCurrQuantity(prevQuan => prevQuan + 1)}><FaPlus color='#8D8D8D' /></button>
                        </div>
                        <button className={`bg-Black Fredoka text-White text-[22px] w-7/12 py-[14px] rounded-full min-w-[150px]
                                relative overflow-hidden inline-block z-10
                                transition-all duration-300 ease-in-out focus:outline-none
                                hover:w-[60%] hover:py-[13px] hover:my-[1px] hover:text-[21.6px]
                                before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:-z-10
                                before:rounded-inherit before:bg-[#505050] before:bg-opacity-40 
                                before:transition-all before:duration-300 before:ease-in-out
                                hover:before:left-0
                            `}>Add to cart</button>
                    </div>
                    <div className='relative cetner flex-col w-full h-full'>
                        <div className='w-full h-full center'>
                            <button className='w-full text-lg focus:outline-none' onClick={() => setSelectedTab('vendor')}>
                                Vendor
                            </button>
                            <button className='w-full text-lg focus:outline-none' onClick={() => setSelectedTab('shipping')}>
                                Shipping
                            </button>
                        </div>
                        <hr className={`w-[20%] h-1 bg-Black rounded-full absolute ${selectedTab === 'vendor' ? 'left-[15%]' : 'left-[64.7%]'} z-30 transition-all duration-500 ease-in-out`} />
                        <div className="w-full min-h-[200px] overflow-hidden">
                            <div className={`w-[200%] h-full flex ${selectedTab === 'shipping' && '-ml-[100%]'} transition-all duration-500 ease-in-out`}>

                                <div className="w-full h-full  center pt-8 gap-4">
                                    <div className='w-min h-full center flex-col gap-1 min-w-min'>
                                        <img src={vendorDetails.img} alt="vendorImg" className='size-16 rounded-full' />
                                        <span className='text-Black text-sm text-nowrap'>{vendorDetails.name}</span>
                                    </div>
                                    {/* <span className='w-[5px] rounded-full min-h-[100px] center flex-col bg-Black'>
                                    </span> */}
                                    <div className='w-full h-full center flex-col gap-3 border-Black border-l-4 pl-4'>
                                        <p className='text-[13px] sm2:text-sm break-words hyphens-auto'>{vendorDetails.description}</p>
                                        <div className='flex items-center gap-1 w-full h-min'>
                                            <FaStar className='size-5' />
                                            <span className='text-base text-Black'>{vendorDetails.rate}</span>
                                            <span className='text-[12px] text-Black font-normal self-end'>{`(${Math.round((+vendorDetails.totalReviews) / (Math.pow(10, Math.floor(Math.log10((+vendorDetails.totalReviews)) + 1) - 1)))}k)`}</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full h-full pt-8 gap-4 flex">
                                    <ul className='list-disc'>
                                        <ListItem label={`Estimated Delivery`} text={'Feb 9 - 15'} />
                                        <ListItem label={`Estimated Delivery`} text={'Feb 9 - 15'} />
                                        <ListItem label={`Estimated Delivery`} text={'Feb 9 - 15'} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
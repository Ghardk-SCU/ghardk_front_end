import Giraffe from '../../../assets/giraffe.png'
import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";
import { useState } from 'react'
import DropMenu from '../../../Components/DropMenu/DropMenu'



export default function CartItemsPart({ itemDetials }) {
    const [selectedColor, setSelectedColor] = useState('White');
    const [selectedSize, setSelectedSize] = useState('Medium');



    return (
        <>
            <div className="Fredoka relative w-[85%] min-h-[140px] max-h-[80%] bg-[#242424] rounded-3xl p-6 flex items-center flex-col sm:flex-row md:center  text-White gap-2 md:gap-4">
                <button className='absolute bg-[#4A4A4A] w-12 h-12 rounded-full center hover:bg-[#585858] transition-all ease-in-out duration-200 -top-[10%] -right-[2%] focus:outline-none'><FaRegTrashAlt size={22} color='#f4f4f8' /></button>
                <div className='relative w-[100%] max-w-[140px] h-full'>
                    <img src={Giraffe} alt="itemImage" className='w-fit h-[150px] object-fit min-w-[60px] rounded-[16px]' />
                </div>
                <div className='flex justify-between flex-grow'>
                    <div className='w-full h-full min-h-[140px] center flex-col'>
                        <div className='w-full h-full flex justify-start gap-1'>
                            <div className='flex justify-start items-start flex-col md:flex-row w-full'>
                                <h3 className='text-[16px] md3:text-2xl font-medium truncate max-w-[calc(100%-30px)]'>{`Boho Bliss Tote Bag`}</h3>
                            </div>
                        </div>
                        <div className='w-full h-full flex gap-x-4 flex-wrap self-start mt-auto'>
                            <DropMenu
                                label="Color"
                                options={['White', 'Black']}
                                selectedOption={selectedColor}
                                onOptionSelect={setSelectedColor}
                                isDark={false}
                            />
                            <DropMenu
                                label="Size"
                                options={['Medium', 'Large']}
                                selectedOption={selectedSize}
                                onOptionSelect={setSelectedSize}
                                
                                isDark={false}
                            />
                            <DropMenu
                                label="Size"
                                options={['Medium', 'Large']}
                                selectedOption={selectedSize}
                                onOptionSelect={setSelectedSize}
                                isDark={false}
                            />
                            <DropMenu
                                label="Size"
                                options={['Medium', 'Large']}
                                selectedOption={selectedSize}
                                onOptionSelect={setSelectedSize}
                                isDark={false}
                            />
                        </div>
                    </div>
                    <div className=' h-full center self-start flex-col min-h-[140px]'>
                        <div className='flex flex-col self-center flex-wrap justify-center'>
                            <span className='text-[16px] md3:text-2xl font-medium'>{`${(+itemDetials.price).toFixed(2)}`}</span>
                            <span className='text-[13px] md3:text-[16px] font-medium self-center mb-[1px]'>EGP</span>
                        </div>
                        <div className='flex mt-auto self-end gap-2 sm3:gap-5'>
                            <button className='outline-none focus:outline-none active:scale-90'><FaMinus color='#8D8D8D' /></button>
                            <span className='text-base sm3:text-xl font-base'>{`${itemDetials.quantity}`}</span>
                            <button className='outline-none focus:outline-none active:scale-90'><FaPlus color='#8D8D8D' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
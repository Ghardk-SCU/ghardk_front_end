import Logo from '../../assets/logo2.svg'
import Btn1 from '../Ui-Components/Buttons/Btn1'

import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";

export default function Footer() {
  return (
    <section className="bg-slate-800 text-white min-h-[50vh] w-full flex flex-col gap-y-20 justify-between mainPadding">
      <div className="w-full h-[80%] grid grid-cols-12 pt-[80px] gap-y-10">
        <section className="pb-10 lg:pb-0 col-span-12 sm:col-span-6 items-center lg:items-start flex flex-col gap-20">
          <div>
            <img className='w[360px] h-[150px] object-contain imgSettings' src={Logo} alt="" />
          </div>
          <div className='w-full xs:w-auto'>
            <Btn1 beforeBg='before:bg-white/[0.25]' classes='xs:ml-[20px] w-full xs:w-[330px] h-[48px] text-white bg-black Amiri text-center rounded-full'>
              Contact us
            </Btn1>
          </div>
        </section>
        {/* <section style={{ direction: 'rtl' }}
          className="col-span-12 sm:col-span-3 Amiri font-bold space-y-2 flex flex-col">
          <h4 className='Cairo opacity-40 leading-9 text-2xl'>
            Suez Canal University
          </h4>
          <div className='Arial flex-grow flex flex-col justify-between text-xl'>
            <p>
              الرئيسي الإسكندرية: (٤) ش الفردوس، (عمارة الجاسكان)، خلف مديرية الأمن، سموحة.
            </p>
            <p>
              القاهرة: قطعة (٩٤٦١)، شارع كريم بنونة، الهضبة العليا، المقطم.
            </p>
            <p>
              البحيرة: كفر الدوار، شارع المحكمة، بجوار بنك القاهرة.
            </p>
          </div>
        </section> */}
        <section style={{ direction: 'rtl' }} className="col-span-12 sm:col-span-6 flex flex-col justify-between">
          <div className='Arial font-bold text-xl'>
            <h4 className='Cairo opacity-40 mb-2 leading-9 text-2xl'>
              Contact us
            </h4>
            <p title='fci.cs.graduation.project@gmail.com' className='truncate'>fci.cs.graduation.project@gmail.com</p>
            {/* <p>01223008506</p>
            <p>03\429416</p>
            <p>01063847523</p> */}
          </div>
          <div className='flex items-center gap-6 mt-10'>
            <PiLinkedinLogoBold size={41} className='opacity-60 hover:opacity-100 duration-300' />
            <FaInstagram size={41} className='opacity-60 hover:opacity-100 duration-300' />
            <RiFacebookBoxLine size={44} className='opacity-60 hover:opacity-100 duration-300' />
          </div>
        </section>
      </div>
      <div className='w-full flex flex-wrap justify-between NunitoSans text-xl gap-y-5'>
        <p className='flex-grow sm:flex-grow-0 text-center opacity-50 hover:opacity-100 duration-300 cursor-pointer'>
          Terms and Conditions
        </p>
        <p className='flex-grow sm:flex-grow-0 text-center opacity-50'>
          All rights reserved © Ghrdk Company 2024
        </p>
      </div>
    </section>
  )
}

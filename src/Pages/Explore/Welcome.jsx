
import LeftSVG from './assets/LeftSVG.svg';
import RightSVG from './assets/RightSVG.svg';

export default function Welcome() {
  return (
    <div className=" w-full min-h-screen center">
      <img className='imgSettings absolute -top-[30%] -left-[30%]' src={LeftSVG} alt="" />
      <h1 className='EBGaramond uppercase font-medium text-[17vw]'>
        Shop
      </h1>
      <img className='imgSettings absolute -top-[10%] -right-[35%]' src={RightSVG} alt="" />
    </div>
  )
}
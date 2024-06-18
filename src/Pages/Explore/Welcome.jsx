
import Left from './assets/Left.png';
import Right from './assets/Right.png';

export default function Welcome() {
  return (
    <div className="relative w-full min-h-screen center">
      <img className='imgSettings absolute -bottom-1/1 -left-1/3 scale-[1]' src={Left} alt="" />
      <h1 className='EBGaramond uppercase font-medium text-[17vw]'>
        Shop
      </h1>
      <img className='imgSettings absolute -bottom-1/1 -right-1/3' src={Right} alt="" />
    </div>
  )
}
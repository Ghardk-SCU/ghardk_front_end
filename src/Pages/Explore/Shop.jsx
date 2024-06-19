import { useState } from 'react'
import DetailsCard from './Components/DetailsCard'
import Selected from './assets/Selected.png'
import ReactSlider from 'react-slider'

export default function Shop() {
  return (
    <div className="z-[5] w-full min-h-screen flex flex-col justify-center md:justify-between gap-y-20 md:flex-row mainPadding mt-[25vh]">
      <div className='md:min-w-[400px] md:pr-10 z-10'>
        <Fillters />
      </div>
      <div className='center gap-4 flex flex-grow flex-wrap'>
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
        <DetailsCard />
      </div>
    </div>
  )
}

const PriceMin = 1;
const PriceMax = 10000;

const Fillters = () => {
  const [categories, setCategories] = useState([
    'Textiles',
    'Woodworking',
    'Pottery And Ceramics',
    'Jewelry Making',
    'Candle Making'
  ])
  const [sortTypes, setSortTypes] = useState([
    'Recommended',
    'Top Rated',
    'Newest',
    'High Price',
    'Low Price'
  ])
  const [selectedSort, setSelectedSort] = useState(0)
  const [selected, setSelected] = useState([])
  const [priceRange, setPriceRange] = useState([PriceMin, PriceMax])



  const handleSelect = (idx) => {
    if (selected.includes(idx)) {
      setSelected(selected.filter(el => el !== idx))
    } else {
      setSelected([...selected, idx])
    }
  }
  return (
    <div className='EBGaramond'>
      <h1 className='text-3xl font-medium'>Categories</h1>
      <div className='mb-5'>
        {categories.map((el, idx) => (
          <div className='flex justify-between py-1' key={idx}>
            <p className='text-xl'>{el}</p>
            <button style={{
              border: '1px solid rgba(16, 16, 16, 0.1)',
              boxShadow: '0px 0px 12.3px 0px rgba(0, 0, 0, 0.2) , 0px 0px 7.5px 0px rgba(0, 0, 0, 0.2) inset',
            }} onClick={() => { handleSelect(idx) }} className='bg-White/50 size-[34px] p-2'>
              {selected.includes(idx) && <img src={Selected} alt="" />}
            </button>
          </div>
        ))}
      </div>
      <h1 className='text-3xl font-medium'>Sort By</h1>
      <div className='my-5 flex flex-wrap gap-5'>
        {sortTypes.map((el, idx) => (
          <button key={idx} onClick={() => { setSelectedSort(idx) }} className={`rounded-full border-2 border-Black text-Black text-xl py-3 px-6 flex-grow ${selectedSort === idx ? "bg-Black text-White" : ""}`}>
            {el}
          </button>
        ))}
      </div>
      <h1 className='text-3xl font-medium'>Filter By</h1>
      <p className='text-xl my-5 font-medium'>Price</p>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[priceRange[0], priceRange[1]]}
        min={PriceMin}
        max={PriceMax}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        onChange={(value) => setPriceRange(value)}
        minDistance={2000}
      />
      <div className='w-full flex justify-between mt-5 Fredoka font-medium'>
        <span>{priceRange[0]}<span className='text-xs'>EGP</span></span>
        <span>{priceRange[1]}<span className='text-xs'>EGP</span></span>
      </div>
    </div>
  )
}

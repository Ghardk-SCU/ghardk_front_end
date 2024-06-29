import { useEffect, useState } from "react"
import TextRevAnim from "../../../utils/TextRevAnim"
import { getCategories } from "../../../Store/urls"
import useFetch from "../../../Components/CustomHooks/useFetch"
import Spinner from "../../../Components/Ui-Components/Spinner"

export default function Fillters({ setUpdatedUrl, data, from }) {
  const [activeFillter, setActiveFillter] = useState([])
  const SelectedStyle = 'bg-white text-Black'
  const handleSelected = (elem) => {
    setActiveFillter(prev => {
      if (prev.includes(elem)) {
        return prev.filter(e => e !== elem)
      }
      return [...prev, elem]
    })
  }

  useEffect(() => {
    if (activeFillter.length === 0) {
      setUpdatedUrl(prev => prev.split('?')[0])
    } else {
      setUpdatedUrl(prev => {
        const mainUrl = prev.split('?')[0]
        return `${mainUrl}?category_id=${activeFillter.join(',')}`
      })
    }

  }, [activeFillter])
  return (
    <>
      {
        data && data.data.categories.map((item, idx) => (
          <button onClick={() => { handleSelected(item.id) }} key={idx} className={`flex-grow border-[1px] hover:border-white duration-300 border-white/50 rounded-full ${activeFillter.includes(item.id) && SelectedStyle}`}>
            {
              activeFillter.includes(item.id) ?
                <span className="py-4 px-8 center">{item.name}</span>
                :
                <TextRevAnim classes='py-4 px-8 center'>{item.name}</TextRevAnim>
            }
          </button>
        ))
      }
      {
        !data && <>
          <div className="flex-grow border-[1px] border-white/50 rounded-full">
            <span className="py-3 px-16 center">
              <Spinner />
            </span>
          </div>
        </>
      }
    </>
  )
}

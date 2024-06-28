import { useState } from 'react'
import useFetch from '../../../Components/CustomHooks/useFetch'
import { topRatedSellers, getCategories } from '../../../Store/urls'
import Welcome from './Welcome'
import Top3Rated from './Top3Rated'
const Top10 = [
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: false,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },
  {
    name: 'Mohammed Nasr',
    img: 'https://picsum.photos/200/300',
    discreption: 'Korem ipsum dolor sit amet, conjjctetur ng elit. Nunc vulputate libero et velitxc iedum bc aliquet odio mattis.',
    isFavorite: true,
    rating: 0,
    totalRates: 0
  },

]
export default function TopRatedRoot({ FirstColor, SecondColor }) {
  const [updatedUrl, setUpdatedUrl] = useState(topRatedSellers())
  const { data, loading } = useFetch({
    url: updatedUrl,
    method: 'GET'
  })
  const { data: Allfillters } = useFetch({
    url: getCategories(),
    method: 'GET'
  })

  const ArrayData = !loading && data && data.status === 'success' ? [data.data.vendors[0], data.data.vendors[1], data.data.vendors[2]] : [Top10[0], Top10[1], Top10[2]]
  console.log(getCategories());
  return (
    <>
      <Welcome FirstColor={FirstColor} SecondColor={SecondColor} />
      <Top3Rated Allfillters={Allfillters} loading={loading} setUpdatedUrl={setUpdatedUrl} details={ArrayData} SecondColor={SecondColor} />
    </>
  )
}

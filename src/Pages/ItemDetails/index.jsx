import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Components/CustomHooks/useFetch'
import Fetch from '../../Components/CustomHooks/Fetch'
import { useNavigate } from 'react-router-dom'
import { getSingleItem, getReviews } from '../../Store/urls'
import Details from './Details/Details'
import ExtraDetails from './Details/ExtraDetails'
import Spinner from '../../Components/Ui-Components/Spinner'
import { AuthenticationContext } from '../../Store/Context/Authentication'
import SimilarProducts from './Components/SimiliarProducts/SimiliarProducts'
import ReviewCards from './Components/SimiliarProducts/ReviewCards'

export default function ItemDetails() {
    const { id } = useParams()
    const { Token } = useContext(AuthenticationContext)
    const { data, loading } = useFetch({
        url: getSingleItem(id),
        method: 'GET',
        Token
    })
    const { data: reviews, loading: reviewsLoading } = useFetch({
        url: getReviews(id),
        method: 'GET',
    })
    const Navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (data && data.status !== 'success') {
        Navigate('/Explore')
    }
    return (
        <>
            <div className='w-full bg-Beige center flex-col gap-4'>
                {!loading && <>
                    <Details itemDetials={data.data.productItem} />
                    <ReviewCards itemDetials={data.data.productItem} reviews={reviews} reviewsLoading={reviewsLoading} />
                    <ExtraDetails itemDetials={data.data.productItem} />
                    <SimilarProducts itemId={id} name={data.data.productItem.name} />
                </>}
                {loading && <div className='center h-screen'>
                    <Spinner />
                </div>}
            </div>
        </>
    );
}
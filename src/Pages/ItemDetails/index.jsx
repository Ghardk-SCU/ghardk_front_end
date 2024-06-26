import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Components/CustomHooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { getSingleItem } from '../../Store/urls'
import Details from './Details/Details'
import Giraffe from '../../assets/giraffe.png'
import ExtraDetails from './Details/ExtraDetails'
import Spinner from '../../Components/Ui-Components/Spinner'
import { AuthenticationContext } from '../../Store/Context/Authentication'

const singleItem = {
    "id": 1,
    "product_item_id": 2,
    "cart_id": 1,
    "quantity": 3,
    "price": "29.50",
    "createdAt": "2024-04-24T00:56:41.668Z",
    "updatedAt": "2024-04-24T00:56:41.668Z"
}

export default function ItemDetails() {
    const { id } = useParams()
    const { Token } = useContext(AuthenticationContext)
    const { data, loading } = useFetch({
        url: getSingleItem(id),
        method: 'GET',
        Token
    })
    const Navigate = useNavigate()


    useEffect(() => {
        console.log({ data })
    }, [data])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (data && data.status !== 'success') {
        Navigate('/Explore')
    }
    return (
        <>
            <div className='w-full bg-Beige center flex-col'>
                {!loading && <>
                    <Details itemDetials={data.data.productItem} />
                    <ExtraDetails itemDetials={data.data.productItem} />
                </>}
                {loading && <div className='center h-screen'>
                    <Spinner />
                </div>}
            </div>
        </>
    );
}
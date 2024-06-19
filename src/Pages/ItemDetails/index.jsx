import Details from './Details/Details'
import Giraffe from '../../assets/giraffe.png'
import ExtraDetails from './Details/ExtraDetails'

const singleItem = {
    "id": 1,
    "product_item_id": 2,
    "cart_id": 1,
    "quantity": 3,
    "price": "29.50",
    "createdAt": "2024-04-24T00:56:41.668Z",
    "updatedAt": "2024-04-24T00:56:41.668Z"
  }
const vendorDetails = {
    "name": "Mohammed Nasr",
    "img": Giraffe,
    "description": "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libeconsectetur adipiscing elit. Nunc vulputate libe ro et velit interdum, ac aliquet odio mattis.",
    "rate": "4.5",
    "totalReviews": "2932"
}

export default function ItemDetails(){
    return (
        <>
            <div className='w-full center flex-col bg-Beige'>
                <Details itemDetials={singleItem} vendorDetails={vendorDetails}/>
                <ExtraDetails />
            </div>
        </>
    );
}
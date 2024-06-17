import CheckoutPart from './Components/CheckoutPart'
import CartItemsPart from './Components/CartItemsPart'
import { useState } from 'react'

const productsDetials = {
  "status": "success",
  "data": {
    "cartProducts": [
      {
        "id": 1,
        "product_item_id": 2,
        "cart_id": 1,
        "quantity": 3,
        "price": "29.50",
        "createdAt": "2024-04-24T00:56:41.668Z",
        "updatedAt": "2024-04-24T00:56:41.668Z"
      },
      {
        "id": 2,
        "product_item_id": 2,
        "cart_id": 1,
        "quantity": 1,
        "price": "2.00",
        "createdAt": "2024-04-24T00:57:35.093Z",
        "updatedAt": "2024-04-24T00:57:35.093Z"
      }
    ]
  }
}

export default function Cart() {
  const [dataArray, setDataArray] = useState(productsDetials.data.cartProducts);

  return (
    <>
      <section className='center flex-col w-screen min-h-screen bg-Black'>
        <div className='h-[50%] flex flex-col'>
          <h1 className='EBGaramond font-medium text-[40px] sm2:text-[50px] text-White mt-44 mb-5'>Shopping Cart</h1>
        </div>
        <div className='w-full h-full flex justify-start flex-col lg2:flex-row py-16 gp-16'>
          <div className='w-full h-full center flex-col gap-12 pb-16'>
            {dataArray.map((element) => (
              <CartItemsPart key={element.id} itemDetials={element} />
            ))}
          </div>
          <div className='w-full h-full center basis-7/12 pb-16'>
            <CheckoutPart dataArray={dataArray} />
          </div>
        </div>
      </section>
    </>
  )
}

// position: absolute;
// width: 328px;
// height: 73px;
// left: calc(50% - 328px/2);
// top: calc(50% - 73px/2);

// font-family: 'EB Garamond';
// font-style: normal;
// font-weight: 500;
// font-size: 56px;
// line-height: 73px;
// /* identical to box height */
// text-align: center;

// /* White */
// color: #F4F4F8;
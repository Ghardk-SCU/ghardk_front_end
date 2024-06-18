import CheckoutPart from './Components/CheckoutPart'
import CartItemsPart from './Components/CartItemsPart'
import CartLocationPart from './Components/CartLocationPart'
import { useState } from 'react'
import Giraffe from '../../assets/giraffe.png'
import Spinner from '../../Components/Ui-Components/Spinner';

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
        'title': 'Boho Bliss Tote Bag',
        'img': Giraffe,
        "createdAt": "2024-04-24T00:56:41.668Z",
        "updatedAt": "2024-04-24T00:56:41.668Z"
      },
      {
        "id": 2,
        "product_item_id": 2,
        "cart_id": 1,
        "quantity": 1,
        "price": "2.00",
        'title': 'Boho Bliss Tote Bag',
        'img': Giraffe,
        "createdAt": "2024-04-24T00:57:35.093Z",
        "updatedAt": "2024-04-24T00:57:35.093Z"
      },
      {
        "id": 3,
        "product_item_id": 3,
        "cart_id": 1,
        "quantity": 1,
        "price": "2.00",
        'title': 'Boho Bliss Tote Bag',
        'img': Giraffe,
        "createdAt": "2024-04-24T00:57:35.093Z",
        "updatedAt": "2024-04-24T00:57:35.093Z"
      },
      {
        "id": 44,
        "product_item_id": 4,
        "cart_id": 1,
        "quantity": 1,
        "price": "2.00",
        'title': 'Boho Bliss Tote Bag',
        'img': Giraffe,
        "createdAt": "2024-04-24T00:57:35.093Z",
        "updatedAt": "2024-04-24T00:57:35.093Z"
      }
    ]
  }
}

export default function Cart() {
  const [dataArray, setDataArray] = useState(productsDetials.data.cartProducts);
  const [Loading, setLoading] = useState(false)
  const [Type, setType] = useState('cart')

  return (
    <>
      {Type === 'cart' && <CartReview dataArray={dataArray} setType={setType} Type={Type} Loading={Loading} />}
      {Type === 'location' && <CartLocation dataArray={dataArray} setType={setType} Type={Type} Loading={Loading} />}
      {Type === 'paymob' && <Paymob />}
    </>
  )
}

const CartReview = ({ dataArray, setType, Type, Loading }) => {
  return (
    <section className='center flex-col w-screen min-h-screen bg-Black'>
      <div className='h-[50%] flex flex-col mainPadding'>
        <h1 className='EBGaramond font-medium text-[40px] sm2:text-[50px] text-White mt-44 mb-5'>Shopping Cart</h1>
      </div>
      <div className='w-full h-full flex justify-start flex-col lg2:flex-row py-16 gp-16'>
        <div className='relative w-full h-full center flex-col gap-12 pb-16'>
          {dataArray.map((element) => (
            <CartItemsPart key={element.id} itemDetials={element} />
          ))}
          {Loading && <div className="cursor-wait w-[calc(100%+50px)] h-full center bg-Black absolute -top-[50px] left-0 opacity-50 select-none">
            <Spinner />
          </div>}
        </div>
        <div className='w-full h-full center basis-7/12 pb-16'>
          <CheckoutPart setType={setType} dataArray={dataArray} Type={Type} Loading={Loading} />
        </div>
      </div>
    </section>
  )
}
const CartLocation = ({ dataArray, setType, Type, Loading }) => {
  return (
    <section className='center flex-col w-screen min-h-screen bg-Black'>
      <div className='h-[50%] flex flex-col mainPadding'>
        <h1 className='EBGaramond font-medium text-[40px] sm2:text-[50px] text-White mt-44 mb-5'>Choose your location</h1>
      </div>
      <div className='w-full h-full flex justify-start flex-col lg2:flex-row py-16 gp-16'>
        <div className='w-full h-full center flex-col gap-12 pb-16'>
          <CartLocationPart Loading={Loading} />
        </div>
        <div className='w-full h-full center basis-2/3 pb-16'>
          <CheckoutPart setType={setType} Type={Type} dataArray={dataArray} Loading={Loading} />
        </div>
      </div>
    </section>
  )
}
const Paymob = () => {
  return (
    <div className='w-screen h-screen bg-Black center py-20'>
      <iframe src="https://accept.paymob.com/api/acceptance/iframes/838725?payment_token=ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb3hOemM1TXpRMUxDSmhiVzkxYm5SZlkyVnVkSE1pT2pFMk5EQXdMQ0pqZFhKeVpXNWplU0k2SWtWSFVDSXNJbWx1ZEdWbmNtRjBhVzl1WDJsa0lqbzBOVFUzTlRZNUxDSnZjbVJsY2w5cFpDSTZNakU0TnpReU9UZ3dMQ0ppYVd4c2FXNW5YMlJoZEdFaU9uc2labWx5YzNSZmJtRnRaU0k2SWsxMWMzUmhabUVpTENKc1lYTjBYMjVoYldVaU9pSkZiSE5vWVhKaGQza2lMQ0p6ZEhKbFpYUWlPaUpoWW5VZ2MyRnhiQ0lzSW1KMWFXeGthVzVuSWpvaVRrRWlMQ0ptYkc5dmNpSTZJazVCSWl3aVlYQmhjblJ0Wlc1MElqb2lUa0VpTENKamFYUjVJam9pVGtFaUxDSnpkR0YwWlNJNklrNUJJaXdpWTI5MWJuUnllU0k2SWtWbmVYQjBJaXdpWlcxaGFXd2lPaUpqZFhOMGIyMWxjakZBWjIxaGFXd3VZMjl0SWl3aWNHaHZibVZmYm5WdFltVnlJam9pS3pJd01USXpORFUyTnpnNU1DSXNJbkJ2YzNSaGJGOWpiMlJsSWpvaVRrRWlMQ0psZUhSeVlWOWtaWE5qY21sd2RHbHZiaUk2SWs1QkluMHNJbXh2WTJ0ZmIzSmtaWEpmZDJobGJsOXdZV2xrSWpwbVlXeHpaU3dpWlhoMGNtRWlPbnQ5TENKemFXNW5iR1ZmY0dGNWJXVnVkRjloZEhSbGJYQjBJanBtWVd4elpTd2libVY0ZEY5d1lYbHRaVzUwWDJsdWRHVnVkR2x2YmlJNkluQnBYM1JsYzNSZllqazFNbUk1TlRNM016Z3pORFF6TURnd05qYzFaakF3TnpOaE1XTXlNRElpZlEuSXU3TGZ2SDJZOVFpd1ZnT2hRT3NUNEUwNWpRUUNNczJNRGVWWktUaHpCS2ZhUUU5UkV4VkxVUDFsaFdzbzJady1EU0N6MEF5TGlkYWpzdllDRkdGVXc=" className='w-[80%] h-[100%]'></iframe>
    </div>
  )
}
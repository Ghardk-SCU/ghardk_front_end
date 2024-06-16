import { CiCircleQuestion } from "react-icons/ci";
import { useState, useEffect } from 'react'


export default function CheckoutPart({dataArray}){
    const [prices, setPrices] = useState({
        subtotal: 0,
        shipping: 0,
        tax: 0,
        total: 0
    })

    useEffect(() => {
        const calculatePrices = () => {
            if (!dataArray || dataArray.length === 0) {
                setPrices({
                    subtotal: 0,
                    shipping: 0,
                    tax: 0,
                    total: 0
                });
                return;
            }
            const subtotal = dataArray.reduce((acc, item) => acc + (+item.price) * (+item.quantity), 0); 
            const shipping = (subtotal > 100 ? 0 : 20); // no shipping if items has cost more than 100 otherwise fixed shpping (edit later)
            const taxRate = 0.05; // tax rate (5%)
            const tax = subtotal * taxRate;
            const total = subtotal + shipping + tax;
            setPrices({
                subtotal,
                shipping,
                tax,
                total
            });
        };
        calculatePrices();
    }, [dataArray]);

    console.log(prices)

    return (
        <>
            <div className="Fredoka relative w-[85%] lg2:w-9/12 h-[380px] max-h-[80%] bg-[#242424] rounded-3xl p-6 center flex-col text-White">
                <div className="w-full h-full center flex-col gap-1">
                    <Cost costTitle="Subtotal" costPrice={prices.subtotal} />
                    <Cost costTitle="Shipping" costPrice={prices.shipping} />
                    <Cost costTitle="Tax" costPrice={prices.tax} />
                    <span className="w-full h-1 bg-White/50 my-2"></span>
                    <Cost costTitle="Total" costPrice={prices.total} isTotal={true} />
                    <span className="w-full h-full text-lg mt-2">{`${dataArray.length} Items`}</span>
                </div>
                <div className="w-full h-full flex flex-col justify-end align-middle items-center">
                    <button className={`
                        bg-White Fredoka text-Black text-[22px] w-[100%] py-[15px] rounded-full font-medium hover:bg-[#f9f1ac]
                        hover:w-[103%] transition-all ease-in-out duration-300`}
                    >
                    Checkout
                    </button>
                </div>
            </div>
        </>
    )

    function Cost({costTitle, costPrice, isTotal}){
        return (
            <div className="flex w-full h-min center">
                <h3 className={`${isTotal ? 'text-[20px] sm2:text-2xl  font-medium' : 'text-[16px] sm2:text-[18px]  font-base'}`}>{costTitle}</h3>
                <div className="ml-auto center">
                    <span className={`${isTotal ? 'text-[20px] sm2:text-2xl  font-medium' : 'text-[16px] sm2:text-[18px]  font-base'}`}>{`${costPrice.toFixed(2)}`}</span>
                    <span className={`${isTotal ? 'font-base text-[14px] sm2:text-md text-medium self-end mb-[2px]' : 'font-base text-[12px] sm2:text-sm text-medium self-end mb-[2px]'}`}>EGP</span>
                </div>
            </div>
        )
    }
}
import { useRef, useEffect, useState, useContext } from 'react'
import { AuthenticationContext } from '../../../../Store/Context/Authentication'
import { motion } from 'framer-motion'
import Card from "../Card";
import { FaStar } from "react-icons/fa";
import Fetch from "../../../../Components/CustomHooks/Fetch";
import { createReview } from "../../../../Store/urls";

export default function ReviewCards({ itemDetials, reviews, reviewsLoading }) {
    const dragRef = useRef()
    const [Width, setWidth] = useState(0)
    const [canRev, setCanRev] = useState(itemDetials?.canReview || false)
    const [stars, setStars] = useState(1)
    const [lastStarHovered, setLastStarHovered] = useState(-1)
    const [reviewText, setReviewText] = useState('')
    const { Token } = useContext(AuthenticationContext)

    const [data, setData] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        setWidth(dragRef.current.scrollWidth - dragRef.current.offsetWidth)
    }, [])

    const handleSubmit = () => {
        if (Loading) return;
        if (!reviewText) {
            setErrorMessage('Please write a review')
            return;
        }
        setErrorMessage('')
        Fetch({
            url: createReview(itemDetials.id),
            method: 'PATCH',
            body: {
                rating: stars,
                comment: reviewText
            },
            setData: setData,
            setErrorMessage: setErrorMessage,
            setLoading: setLoading,
            Token
        })
    }

    useEffect(() => {
        if (data && data.status === 'success') {
            setCanRev(false)
            window.location.reload()
        }
    }, [data])



    return (
        <>

            {canRev &&
                <div className="w-[95%] space-y-5 bg-Beige2 text-black py-10 px-4 mb-10 rounded-lg">
                    <div className="flex gap-x-2">
                        {
                            [1, 2, 3, 4, 5].map((star, idx) => (
                                <FaStar
                                    key={idx}
                                    size={30}
                                    onMouseEnter={() => { if (!Loading) setLastStarHovered(star) }}
                                    onMouseLeave={() => { if (!Loading) setLastStarHovered(-1) }}
                                    onClick={() => { if (!Loading) setStars(star) }}
                                    className={`duration-300 cursor-pointer ${star <= stars || star <= lastStarHovered ? 'text-yellow-400' : 'text-white/50'} hover:text-yellow-400 text-4xl cursor-pointer`}
                                />
                            ))
                        }
                    </div>
                    <div>
                        <textarea onChange={(e) => { if (!Loading) setReviewText(e.target.value) }} value={reviewText} className="w-full h-40 p-4 my-4 outline-none rounded-lg bg-white/50" placeholder="Write your review here" />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className={`bg-black text-white py-2 px-10 rounded-lg  ${Loading ? " cursor-wait bg-black/50" : ""}`}>Submit</button>
                    </div>
                    <div>
                        <p className="text-red-500">{errorMessage}</p>
                    </div>
                </div>
            }
            <div className="w-[95%] px-4">
                <h3 className="text-3xl font-medium pb-8">Reviews</h3>
            </div>
            <div className='relative w-fit overflow-hidden mb-20'>
                <motion.div
                    ref={dragRef}
                    drag="x"
                    dragConstraints={{ left: -Width - (window.innerWidth > 500 ? 50 : 20), right: 0 }}
                    className='w-screen flex gap-8 pr-0 pl-6 sm:pr-12 sm:pl-12'
                >
                    {
                        !reviewsLoading && reviews && reviews.data.reviews.map((review, idx) => {
                            return <Card key={idx} reviewDetails={review} />;
                        })
                    }
                    {
                        !reviewsLoading && reviews && reviews.data.reviews.length === 0 && <h1 className='text-2xl font-medium w-full center pb-20'>No Reviews Yet</h1>
                    }
                </motion.div>
            </div>
        </>
    );
}
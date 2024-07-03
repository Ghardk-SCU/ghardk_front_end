import Card from "../Card";
import { motion, useMotionValue, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function ReviewCards({ reviews, reviewsLoading }) {
    const dragRef = useRef()
    const [Width, setWidth] = useState(0)


    useEffect(() => {
        setWidth(dragRef.current.scrollWidth - dragRef.current.offsetWidth)
    }, [])

    return (
        <>
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
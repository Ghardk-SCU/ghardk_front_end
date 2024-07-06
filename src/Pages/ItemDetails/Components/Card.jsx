import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Card({ reviewDetails }) {

    const StarCounter = () => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (reviewDetails.rating >= i + 1) {
                stars.push(<FaStar key={i} />)
            } else if (reviewDetails.rating > i && reviewDetails.rating < i + 1) {
                // if there is a half star
                stars.push(<FaStarHalfAlt key={i} />)
            } else {
                stars.push(<FaRegStar key={i} style={{ color: '#101010' }} />)
            }
        }
        return (
            <div className='flex items-center font-thin'>
                {stars}
            </div>
        )
    }

    return (
        <>
            <div className="max-w-[300px] sm:min-w-[400px] min-h-[230px] max-h-[230px] h-min p-4 cetner flex-col bg-DarkBeige rounded-xl shadow-[inset_0_0px_4px_rgba(0,0,0,0.3)]">
                <section className="w-full h-full center">
                    <div>
                        <StarCounter />
                    </div>
                    <span className="ml-auto text-sm text-Black/80">
                        {reviewDetails.createdAt.substring(0, 10)}
                    </span>
                </section>
                <section title={reviewDetails.comment} className="w-full h-full text-sm mt-4 line-clamp-4">
                    {reviewDetails.comment}
                </section>
                <section className="w-full truncate h-full mt-5 text-sm text-Black/75 flex items-center gap-2 font-medium">
                    <img className="aspect-square rounded-full size-16" src={reviewDetails.customer_image_url} alt="" />
                    <p>{reviewDetails.customer_user_name}</p>
                </section>
            </div>
        </>
    );
}
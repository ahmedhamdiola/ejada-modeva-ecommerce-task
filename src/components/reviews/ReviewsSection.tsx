import { REVIEWS } from "./data"
import ReviewCard from "./ReviewCard"

const ReviewsSection = () => {
    return (
        <div className="bg-gray-100 py-20 lg:py-40 flex font-Lato relative z-10 -mb-32">
            <div className="overflow-hidden">
                <div className="flex gap-10 animate-marquee">
                    {REVIEWS.length < 10 ? Array.from({ length: 10 }).map((_, index) => {
                        index = index % REVIEWS.length
                        return <ReviewCard name={REVIEWS[index].name} date={REVIEWS[index].date} review={REVIEWS[index].review} comment={REVIEWS[index].comment} />
                    }) : (
                        REVIEWS.map((review, index) => (
                            <ReviewCard key={index} name={review.name} date={review.date} review={review.review} comment={review.comment} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReviewsSection

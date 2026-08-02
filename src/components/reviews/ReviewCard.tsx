import { StarIcon } from "@heroicons/react/16/solid"

interface ReviewCardProps {
    name: string,
    date: string,
    review: number,
    comment: string
}

const ReviewCard = ({ name, date, review, comment }: ReviewCardProps) => {
    return (
        <div className=" max-w-2xl bg-white p-4 sm:p-6 md:p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-[#4D0E0E] sm:h-16 sm:w-16" />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-900 sm:text-lg">{name}</h1>
                        <h3 className="text-sm text-gray-500">{date}</h3>
                    </div>
                </div>

                <div className="flex items-center">
                    {Array.from({ length: review }).map((_, index) => (
                        <StarIcon key={index} className="size-4 text-yellow-300 sm:size-5" />
                    ))}
                </div>
            </div>
            <p className="text-sm text-gray-500">{comment}</p>
        </div>
    )
}

export default ReviewCard

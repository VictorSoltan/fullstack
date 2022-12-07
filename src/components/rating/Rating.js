import StarRatings from "react-star-ratings";

export default function StarssRating ({item}) {
    const {rating} = item;
    return (
        <div className="ratingStars">
            <StarRatings
                rating={rating / 2}
                starRatedColor="red"
                starDimension="26px"
            />
        </div>
    )
}

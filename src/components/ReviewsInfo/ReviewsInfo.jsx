import PropTypes from "prop-types";
import styles from "./ReviewsInfo.module.css";

const ReviewsInfo = ({ reviews }) => {

    return (
        <ul className={styles.reviews_list}>
            {reviews.map(({id, author, content}) => {
                return (
                    <li key={id} className={styles.reviews_item}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                )
            })}
        </ul>
    )
}

ReviewsInfo.propTypes = {
    reviews: PropTypes.array.isRequired,
};

export default ReviewsInfo;
import PropTypes from "prop-types";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import styles from "./PageNavButtons.module.css";

const PageNavButtons = ({ onPageUp, onPageDown, currentPage, totalPages }) => {
    return (
        <div className={styles.page_container}>
            <button
                disabled={(currentPage === 1) && true}
                className={styles.page_nav}
                type="button"
                onClick={onPageDown}>
                <IoIosArrowRoundBack />
            </button>
            <div>{currentPage}</div>
            <button
                disabled={(currentPage === totalPages) && true}
                className={styles.page_nav}
                type="button"
                onClick={onPageUp}>
                <IoIosArrowRoundForward />
            </button>
        </div>
    );
};

PageNavButtons.propTypes = {
    onPageUp: PropTypes.func.isRequired,
    onPageDown: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
};
   
export default PageNavButtons;
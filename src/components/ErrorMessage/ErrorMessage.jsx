import PropTypes from "prop-types";
import { ImSad2 } from 'react-icons/im';
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({message}) => {
    return (
      <div className={styles.message}>
        <ImSad2 className={styles.message_icon} />
        {message}
      </div>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default ErrorMessage;
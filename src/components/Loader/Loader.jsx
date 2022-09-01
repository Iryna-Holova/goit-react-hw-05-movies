import { ImSpinner9 } from 'react-icons/im';
import styles from "./Loader.module.css";

const Loader = () => {
    return (
      <div className={styles.loader}>
        <ImSpinner9 className={styles.spinner} />
        Loading...
      </div>
    )
}

export default Loader;
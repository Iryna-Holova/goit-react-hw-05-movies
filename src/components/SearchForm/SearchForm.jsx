import PropTypes from "prop-types";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "./SearchForm.module.css";

const SearchForm = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const handleInputChange = event => {
        setValue(event.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValue('');

        if (value.trim() === '') {
            alert('Please enter search query');
        } else onSubmit(value);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={handleInputChange}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
            />
            <button type="submit" className={styles.form_button}><MdSearch/></button>
        </form>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
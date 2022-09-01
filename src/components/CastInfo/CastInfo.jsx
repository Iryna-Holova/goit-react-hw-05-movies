import PropTypes from "prop-types";
import styles from "./CastInfo.module.css";

const CastInfo = ({ cast }) => {
    const actorPoster = (profile_path) => {
        if (profile_path) {
            return `https://image.tmdb.org/t/p/w500${profile_path}`;
        } else return 'https://ranobehub.org/img/ranobe/posters/default.jpg'
    }

    return (
        <ul className={styles.cast_list}>
            {cast.map(({id, profile_path, name, character }) => {
                return (
                    <li key={id} className={styles.cast_item}>
                        <img className={styles.cast_poster} src={actorPoster(profile_path)} alt={name}></img>
                        <h3>{name}</h3>
                        {character && <p className={styles.cast_character}>Character: {character}</p>}
                    </li>
                )
            })}
        </ul>
    )
}

CastInfo.propTypes = {
    cast: PropTypes.array.isRequired,
};

export default CastInfo;
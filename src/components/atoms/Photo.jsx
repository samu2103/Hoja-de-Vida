import styles from './Photo.module.css';

export const Photo = (props) => {
	return <img src={props.image} className={styles.photo} />;
};

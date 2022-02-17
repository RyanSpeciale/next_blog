import styles from '../styles/about.module.css';

const about = () => {
	return (
		<div className={styles.container}>
			<h1>This is the about page.</h1>
			<br></br>
			<p>
				This is where I will explain a little about me. I am Ryan Speciale an
				aspiring full stack developoer and computer information student. This
				blog was built with the MERN Stack hence the name.
			</p>
		</div>
	);
};

export default about;

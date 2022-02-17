import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Ooooppppps....</h1>
			<h3 className={styles.h3}>Sorry but that page cannot be found.</h3>
			<Link href='/'>
				<a className={styles.link}>Click here if not redirected</a>
			</Link>
		</div>
	);
};

export default NotFound;

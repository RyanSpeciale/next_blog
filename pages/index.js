import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import technology from '../public/technology.jpeg';
import technology2 from '../public/technology2.jpeg';
import { useSession } from 'next-auth/react';
import prisma from '../lib/prisma'
import { Button } from '@mui/material';


const Home = ({ posts }) => {
	const { data: session, status } = useSession();

	return (
		<div>
			<Typography className={styles.subtitle}>Latest Posts</Typography>
			<Grid container className={styles.container}>
				<Grid item xs={4} className={styles.item}>
					<Paper elevation={2} className={styles.paper}>
						<Typography align='center' gutterBottom>{posts[1].title}</Typography>
						<Typography align='center' gutterBottom>By: {posts[1].author.name}</Typography>
						<Button sx={{ color: 'black' }} href={'/posts/' + posts[1].id}>Read</Button>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper elevation={2} className={styles.paper}>
						<Typography align='center' gutterBottom>{posts[1].title}</Typography>
						<Typography align='center' gutterBottom>By: {posts[1].author.name}</Typography>
						<Button sx={{ color: 'black '}} href={'/posts/' + posts[1].id}>Read</Button>
					</Paper>
				</Grid>
			</Grid>
			<Grid container>
				<div className={styles.tech}>
					<Image
						alt='Code on a Screen'
						src={technology}
						width={400}
						height={250}
						placeholder='blur'
					/>
				</div>
				<div className={styles.tech2}>
					<Image
						alt='code on a screen number 2'
						src={technology2}
						width={400}
						height={250}
						placeholder='blur'
					/>
				</div>
			</Grid>
		</div>
	);
};
export default Home;


export async function getServerSideProps() {
	const posts = await prisma.post.findMany({
		take: 2,
		include: {
            author: {
              select: { name: true },
            }
        },

	})
	

	return {
		props: { posts }
	}
}
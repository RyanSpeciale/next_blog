import prisma from '../../lib/prisma';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import styles from '../../styles/posts.module.css';
import PostCard from '../../components/PostCard';


const postsIndex = ({ posts }) => {
	return (
		<div className={styles.container}>
			<Typography align='center' variant='h3' gutterBottom className={styles.header}>
				All Posts
			</Typography>
			<Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
                {posts.map(post => (
                    <Grid item xs={4} key={post.id} className={styles.post}>
                        <PostCard post={post}/>
                    </Grid>
                ))}
            </Grid>
		</div>
	);
};

export default postsIndex;

export async function getStaticProps() {
	const data = await prisma.post.findMany({
        include: {
            author: {
              select: { name: true },
            }
        }
    });
    console.log(data)
	return {
		props: { posts: data },
	};
}


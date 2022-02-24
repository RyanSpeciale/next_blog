import prisma from '../../lib/prisma';
import styles from '../../styles/specificpost.module.css';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/system';



const specificPost = ({ post }) => {
    
    return (
        <div className={styles.container}>
            <Grid container className={styles.gridcontainer}>
                <Grid item xs={12} className={styles.griditem}>
                    <Paper elevation={10} className={styles.paper}>
                        <Box className={styles.box}>
                            <Image width={650} height={450} className={styles.image} alt='random photo' src={'https://source.unsplash.com/random'} /> 
                        </Box>
                        <Typography variant='h3' align='center' className={styles.title}>{post.title}</Typography>
                        <Typography variant='h6' align='center' className={styles.author}>By: {post.author.name}</Typography>
                        <Typography gutterBottom variant='body1' align='center' className={styles.content}>{post.content}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export async function getStaticPaths() {
    const data = await prisma.post.findMany({
        include: {
            author: {
              select: { name: true },
            }
        }
    });

    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const data = await prisma.post.findFirst({
        where: { id: id },
        include: {
            author: {
              select: { name: true },
            }}
    });

    return {
        props: { post: data }
    }
}


export default specificPost;
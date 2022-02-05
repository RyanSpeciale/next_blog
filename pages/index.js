import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Image from 'next/image'
import styles from '../styles/home.module.css'
import technology from '../public/technology.jpeg'
import technology2 from '../public/technology2.jpeg'

const Home = ({ data }) => {
    return (
        <div>
            <Typography className={styles.subtitle}>Latest Posts</Typography>
            <Grid container className={styles.container}>
                <Grid item xs={4} className={styles.item}>
                    <Paper elevation={2} className={styles.paper}>{data.quote}</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={2} className={styles.paper}>{data.quote}</Paper>
                </Grid>
            </Grid>
            <Grid container>
            <div className={styles.tech}>
            <Image
                alt="Code on a Screen"
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




export async function getStaticProps() {
    const res = await fetch('https://api.kanye.rest')
    const data = await res.json()
    return {
        props: {
            data,
        }
    }
}
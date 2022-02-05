import Link from "next/link";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import styles from '../styles/navbar.module.css'
import { Typography } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';

const Navbar = () => {
    return (
        <div>
            <Toolbar className={styles.toolbar}>
              <FeedIcon fontSize='large'/>
              <Typography className={styles.title}>MERN Blog</Typography>
              <Link href='/' passHref>
                  <Button variant='text' className={styles.button}>home</Button>
              </Link>
              <Link href='/createpost' passHref>
                  <Button variant='text' className={styles.button}>create post</Button>
              </Link>
              <Link href='/posts' passHref>
                  <Button variant='text' className={styles.button}>all posts</Button>
              </Link>
              <Link href='/signin' passHref>
                  <Button variant='text' className={styles.button}>sign in</Button>
              </Link>
              <Link href='/signup' passHref>
                  <Button variant='text' className={styles.button}>sign up</Button>
              </Link>
              <Link href='/profile' passHref>
                  <Button variant='text' className={styles.button}>profile</Button>
              </Link>
            </Toolbar>
        </div>
    );
};

export default Navbar;
import Link from "next/link";
import { Avatar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import styles from '../styles/navbar.module.css'
import { Typography } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    
    return (
        <div>
            <Toolbar className={styles.toolbar}>
              <FeedIcon fontSize='large'/>
              <Typography className={styles.title}>PERN Blog</Typography>
              <Link href='/' passHref>
                  <Button variant='text' className={styles.button}>home</Button>
              </Link>
              <Link href='/createpost' passHref>
                  <Button variant='text' className={styles.button}>create post</Button>
              </Link>
              <Link href='/posts' passHref>
                  <Button variant='text' className={styles.button}>all posts</Button>
              </Link>
              {session 
              ? <Button variant='text' className={styles.button} onClick={() => signOut()}>Sign Out</Button>
              : <Button variant='text' className={styles.button} onClick={() => signIn()}>Sign In</Button> 
              }
              <Link href='/profile' passHref>
                  <Button variant='text' className={styles.button}>profile</Button>
              </Link>
              {session
              ? <Avatar className={styles.avatar} alt="User Photo" variant='circular' sizes="md" src={session.user.image}/>
              : <></>
              }
            </Toolbar>
        </div>
    );
};

export default Navbar;
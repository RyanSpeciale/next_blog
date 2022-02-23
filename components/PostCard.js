import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../styles/card.module.css';
import { Box, CardActions } from '@mui/material';



const PostCard = ({ post }) => {
    
    
    return (
        <div>
            <Card className={styles.card}>
              <CardContent>
                  <Typography variant='h5' className={styles.title}>{post.title}</Typography>
                  <Typography variant='body1' className={styles.author}>By: {post.author.name}</Typography>
                  <br></br>
                  <Button variant='text' className={styles.button}>Read</Button>
                  <Button variant='text' className={styles.button}>Share</Button>
              </CardContent>
            </Card>
        </div>
    );
};

export default PostCard;
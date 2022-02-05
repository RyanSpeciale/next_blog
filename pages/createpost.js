import TextField from '@mui/material/TextField'
import { Grid, Typography } from '@mui/material';
import styles from '../styles/create.module.css'
import { Button } from '@mui/material';


const createpost = () => {
    
    const handleChange = () => {
        
    }
    
    
    
    
    return (
        <div className={styles.maincontainer}>
            <Grid container direction='column' className={styles.container}>
                <Grid item xs={4} className={styles.item}>
                    <Typography className={styles.title} variant='h4' align='center'>Create Post</Typography>
                    <TextField label='Title' placeholder='Title' className={styles.textfield1}/>
                </Grid>
                <Grid item>
                    <TextField label='Body' placeholder='Body' rows={5} maxRows={40} multiline className={styles.textfield2}/>
                </Grid>
                <Grid item>
                    <Button variant='contained' className={styles.button}>Submit</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default createpost;
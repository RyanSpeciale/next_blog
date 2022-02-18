import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import styles from '../styles/create.module.css';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';


const Createpost = () => {
	const router = useRouter();
	const { data: session, status} = useSession({
		required: true,
		onUnauthenticated() {
			setTimeout(() => {
				router.push('/api/auth/signin')
			}, 50)
		}
	});
	
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { title, content };
			await fetch('/api/createpost', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
			router.push('/posts');
		} catch (err) {
			console.error(err)
		}
	}

	


	if (status === 'loading') {
		return <></>;
	} else
		return (
			<div className={styles.maincontainer}>
				<Grid container direction='column' className={styles.container}>
					<Grid item xs={4} className={styles.item}>
						<Typography className={styles.title} variant='h4' align='center'>
							Create Post
						</Typography>
						<Typography className={styles.name} variant='h6' align='left'>
							You are signed in as {session.user.name}
						</Typography>
						<TextField
							label='Title'
							placeholder='Title'
							className={styles.textfield1}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Grid>
					<Grid item>
						<TextField
							label='Body'
							placeholder='Body'
							rows={5}
							maxRows={40}
							multiline
							className={styles.textfield2}
							onChange={(e) => setContent(e.target.value)}
						/>
					</Grid>
					<Grid item>
						<Button variant='contained' className={styles.button} onClick={handleSubmit}>
							Submit
						</Button>
					</Grid>
				</Grid>
			</div>
		);
};

export default Createpost;

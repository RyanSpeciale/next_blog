import { Modal, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";





const Profile = () => {
	const router = useRouter();
	const { data: session, status} = useSession({
		required: true,
		onUnauthenticated() {
			setTimeout(() => {
				router.push('/api/auth/signin')
			}, 50)
		}
	});

	if (status == 'loading') return <></>;

	return (
		<div>
			<p>{session.user.name}</p>
		</div>
	)
	
	
	
};

export default Profile;
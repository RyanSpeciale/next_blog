import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
    const { data: session } = useSession();
    
    
    return (
        <div>
            {session ? <h1>{session.user.name}</h1> : <h1></h1>}
        </div>
    );
};
 
export default Profile;
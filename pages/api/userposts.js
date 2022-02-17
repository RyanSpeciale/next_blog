import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();


export default async function handler(req, res) {
    const session = await getSession({ req });
    if (session) {
        let posts = await getPosts(session.user.email);
        res.status(203).json({ userposts: posts })
    } else {
        res.status(403).json({ error: 'Could not validate user' })
    }
}

const getPosts = async (userEmail) => {
    try {
        let userPosts = await prisma.user.findUnique({
            where: {
                email: userEmail,
            }
        })
        return userPosts;
    } catch (error) {
        return error;
    }
}
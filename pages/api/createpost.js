import prisma from '../../lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const { title, content } = req.body;
    const session = await getSession({ req });
    if (session) {
        const result = await prisma.post.create({
            data: {
                title: title,
                content: content,
                author: { connect: { email: session?.user?.email }},
            }
        });
        res.json(result);
    } else {
        res.status(402).json({ error: 'Could not authenticate user' });
    };
};







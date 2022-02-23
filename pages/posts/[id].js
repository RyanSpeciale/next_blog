import prisma from '../../lib/prisma';
import styles from '../../styles/specificpost.module.css';



const specificPost = ({ post }) => {
    
    return (
        <div className={styles.container}>
            
        </div>
    );
};

export async function getStaticPaths() {
    const data = await prisma.post.findMany({
        include: {
            author: {
              select: { name: true },
            }
        }
    });

    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const data = await prisma.post.findFirst({
        where: { id: id },
        include: {
            author: {
              select: { name: true },
            }}
    });

    return {
        props: { post: data }
    }
}


export default specificPost;
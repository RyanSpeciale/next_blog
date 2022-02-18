import prisma from '../../lib/prisma';

const postsIndex = ({ posts }) => {
    return (
        <div>
          <h1>All Posts</h1>
          <br></br>
          {posts.map(post => (
              <div key={post.id}>
                  <h3>{ post.title }</h3>
                  <p>{ post.content }</p>
              </div>
          ))}

           

        </div>
    );
};

export default postsIndex;

export async function getStaticProps() {
    const data = await prisma.post.findMany()

    return {
        props: { posts: data }
    }
}


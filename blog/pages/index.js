import Layout from '../components/layout';
import BlogPosts from '../components/post-summary';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    allPostsData.length=1;
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
    return (
        <Layout>

        <section>

            <h2 className='headingLg'>Recent Blog Posts</h2>

            <ul className='list'>
                {allPostsData.map(({id, date, title}) => (<BlogPosts id={id} title={title} date={date}/>))}
            </ul>

        </section>
        <style jsx>{`
        section {
          width: 85%;
        }
      `}</style>
        
        </Layout>
    );
}

import Layout from '../components/layout';
import PostSummary from '../components/post-summary';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    
    return {
        props: {
            allPostsData,
        },
    };
}

export default function AllPosts({allPostsData}) {
    return (
        <Layout>

        <section>

            <h2 className='headingLg'>All Blog Posts</h2>

            <ul className='list'>
                {allPostsData.map(({id, date, title}) => (<PostSummary id={id} title={title} date={date}/>))}
            </ul>
          
        </section>
        
        </Layout>

    );
}
import Layout from '../components/layout';
import PostSummary from '../components/post-summary';

import Head from 'next/head';

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
        <Head>
            <title>90 Days of Coding - All Posts</title>
        </Head>
        <section>

            <h2 className='headingLg'>All Blog Posts</h2>

            <ul class="list-unstyled">
                {allPostsData.map(({id, date, title, subtitle, imgurl}) => (<PostSummary id={id} title={title} subtitle={subtitle} date={date} imgurl={imgurl}/>))}
            </ul>
          
        </section>
        
        </Layout>

    );
}
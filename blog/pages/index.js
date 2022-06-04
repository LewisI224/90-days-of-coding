import Layout from '../components/layout';
import PostSummary from '../components/post-summary';

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

            <div class="jumbotron">
                <h1 class="display-4">Welcome to my blog!</h1>
                <p class="lead">This website documents my work over the summer of 2022 and also showcases some of my other work.</p>
                <hr class="my-4"></hr>

            </div>

            <h2 className='headingLg'>Recent Blog Posts</h2>

            <ul class="list-unstyled">
                {allPostsData.map(({id, date, title, subtitle, imgurl}) => (<PostSummary id={id} title={title} subtitle={subtitle} date={date} imgurl={imgurl}/>))}
            </ul>

        </section>

        </Layout>
    );
}

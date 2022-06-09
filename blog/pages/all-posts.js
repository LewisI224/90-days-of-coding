import Layout from '../components/layout';
import PostSummary from '../components/post-summary';

import Head from 'next/head';

import { useEffect, useState } from 'react'

export default function AllPosts() {

    const [data, setData] = useState([]);
    async function getData() {
        const req = await fetch('/api/getPosts');
        const newData = await req.json();
        setData(newData);
    }
    useEffect(() => {
        getData();
    },[])

    return (
        <Layout>
        <Head>
            <title>90 Days of Coding - All Posts</title>
        </Head>
        <section >

            <h2 className='headingLg'>All Blog Posts</h2>
            <div className="row">
                {data.map((d) => (<PostSummary id={d.data.id} title={d.data.title} subtitle={d.data.subtitle} date={d.data.date} imgurl={d.data.imgurl}/>))}
            </div>
            
          
        </section>
        
        </Layout>

    );
}
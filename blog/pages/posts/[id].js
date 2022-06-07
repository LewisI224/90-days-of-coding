import Layout from '../../components/layout';
import PostBody from '../../components/post-body';

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Head from 'next/head';

export default function Post() {
    const [data, setData] = useState([]);
    const router = useRouter()
    const {id} = router.query
    
    async function getData() {
        const req = await fetch(`/api/post/${id}`);
        const newData = await req.json();
        setData(newData);
    }

    useEffect(() => {
        if (router.isReady) {
            const {id} = router.query
        }
        getData();
    },[router.isReady])

    return (
        <Layout>
          
        <Head>
            {data.map((d) => ( <title>{d.data.title}</title> ))}
        </Head>
        
        <section>
            {data.map((d) => ( <PostBody title={d.data.title} subtitle={d.data.subtitle} date={d.data.date} imgurl={d.data.imgurl} text={d.data.text} /> ))}  
        </section>

        </Layout>
    );
}

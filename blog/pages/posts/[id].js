import Date from '../../components/date';
import Layout from '../../components/layout';
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
            <title>{data.map((d) => ( <h1>{d.data.title}</h1> ))}</title>
        </Head>
        
        <section>
            {data.map((d) => ( <h1>{d.data.title}</h1> ))}
            {data.map((d) => ( <div><Date dateString={d.data.date} /></div> ))}
            {data.map((d) => ( <div dangerouslySetInnerHTML={{__html: d.data.text}}></div> ))}
            
            
        </section>

        </Layout>
    );
}

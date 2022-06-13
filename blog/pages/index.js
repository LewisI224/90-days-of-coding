import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import PostSummary from '../components/post-summary';
import ProjectSummary from '../components/project-summary';

import { useEffect, useState } from 'react'

export default function Home() {

    const [data, setData] = useState([]);
    async function getData() {
        const req = await fetch('/api/getPosts');
        const newData = await req.json();
        newData.length = 2;
        setData(newData);
    }
    useEffect(() => {
        getData();
    },[])

    const [projects, setProjects] = useState([]);
    async function getProjects() {
        const req = await fetch('/api/getProjects');
        const newProjects = await req.json();
        newProjects.length = 2;
        setProjects(newProjects);
    }
    useEffect(() => {
        getProjects();
    },[])

    return (
        <Layout>

        <section>

            <Jumbotron />


            <h2 className='headingLg'>Recent Blog Posts</h2>
            <div className="row" style={{margin: ' 10px'}}>
                {data.map((d) => (<PostSummary id={d.data.id} title={d.data.title} subtitle={d.data.subtitle} date={d.data.date} imgurl={d.data.imgurl}/>))}
            </div>

            <h2 className='headingLg'>Recent Projects</h2>
            <div className="row" style={{margin: ' 10px'}}>
                {projects.map((p) => (<ProjectSummary name={p.data.name} description={p.data.description} technologies={p.data.technologies} time={p.data.time} imgurl={p.data.imgurl} github={p.data.github} weblink={p.data.weblink} />))}
            </div>

        </section>

        </Layout>
    )
}

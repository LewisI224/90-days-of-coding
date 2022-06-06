import Layout from '../components/layout';
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

            <div className="jumbotron">
                <h1 className="display-4">Welcome to my blog!</h1>
                <p className="lead">This website documents my work over the summer of 2022 and also showcases some of my other work.</p>
                <hr className="my-4"></hr>

            </div>

            <h2 className='headingLg'>Recent Blog Posts</h2>
            <div className="row">
                {data.map((d) => (<PostSummary id={d.data.id} title={d.data.title} subtitle={d.data.subtitle} date={d.data.date} imgurl={d.data.imgurl}/>))}
            </div>

            <h2 className='headingLg'>Recent Projects</h2>
            <div className="row">
                {projects.map((p) => (<ProjectSummary name={p.data.name} description={p.data.description} technologies={p.data.technologies} time={p.data.time} imgurl={p.data.imgurl}/>))}
            </div>

        </section>

        </Layout>
    );
}

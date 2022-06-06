import Layout from '../components/layout';
import ProjectSummary from '../components/project-summary';

import { useEffect, useState } from 'react'

export default function Portfolio() {
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

            <h2>Portfolio</h2>
            <div className="row">
                {projects.map((p) => (<ProjectSummary name={p.data.name} description={p.data.description} technologies={p.data.technologies} time={p.data.time} imgurl={p.data.imgurl}/>))}
            </div>


            </section>
            
        </Layout>

    );
}
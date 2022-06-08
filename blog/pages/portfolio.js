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

            <h2>About Me</h2>
            <div>
                <p>
                I studied at Heriot-Watt University from September 2018 to June 2022, graduating with a 1st in Computer Science.
                During this time I interned with BT Security for a summer helping to design and implement a series of virtualized lab environments for other staff to train on as well as develop and test new software before deploying to client systems.
                </p>
                <p>
                In September 2022 I will start working at Skyscanner in Edinburgh as a Graduate Software Engineer.
                </p>
            </div>
            
            <h2>Portfolio</h2>
            <div className="row">
                {projects.map((p) => (<ProjectSummary name={p.data.name} description={p.data.description} technologies={p.data.technologies} time={p.data.time} imgurl={p.data.imgurl} github={p.data.github} weblink={p.data.weblink}/>))}
            </div>

            

            </section>
            
        </Layout>

    );
}
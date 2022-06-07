import Image from 'next/image'
import { parseISO, format } from 'date-fns';

import styles from './css-modules/project-summary.module.css'

export default function ProjectSummary ({name, description, technologies, time, imgurl}) {
    const date = parseISO(time);
    return (
        <div className="col">
            <div className={styles.project}>
                <div className='card mb-3' key={name} >
                
                    
                    <h5 className="card-header"><time dateTime={time}>{format(date, 'MMMM yyyy')}</time></h5>
                    {imgurl ? (
                        <>
                        <Image 
                        src={`https://90-days-blog.s3.eu-west-2.amazonaws.com/${imgurl}.png`}
                        alt="Project Image"
                        width="960px"
                        height="480px"
                        layout='responsive'
                        />
                        </>
                    ) : (
                        <>
                        <Image 
                        src={`https://90-days-blog.s3.eu-west-2.amazonaws.com/default.png`}
                        alt="Blog Post Image"
                        width="960px"
                        height="480px"
                        layout='responsive'
                        />
                        </>
                    )}
                        
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className='card-text'>{description}</p>
                        <p className='card-text'>{technologies}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
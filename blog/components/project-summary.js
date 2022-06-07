import Image from 'next/image'
import { parseISO, format } from 'date-fns';

import styles from './css-modules/project-summary.module.css'

export default function ProjectSummary ({name, description, technologies, time, imgurl, github, weblink}) {
    const date = parseISO(time);
    return (
        <div className="col">
            <div className={styles.project}>
                <div className='card mb-3' >
                    <h5 className="card-header"><time dateTime={time}>{format(date, 'MMMM yyyy')}</time></h5>
                    <div>
                        {imgurl ? (
                            <>
                            <Image 
                            src={`https://90-days-blog.s3.eu-west-2.amazonaws.com/${imgurl}.png`}
                            alt="Project Image"
                            width="960px"
                            height="480px"
                            layout='responsive'
                            priority='true'
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
                            priority='true'
                            />
                            </>
                        )}
                    </div>
                    
                        
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className='card-text'>{description}</p>
                        {github ? (
                            <>
                            <a href={github} style={{ marginRight: '1%' }} className="btn btn-primary">GitHub Link</a>
                            </>
                        ) : (
                            <>
                            </>
                        )
                        }
                        {weblink ? (
                            <>
                            <a href={weblink} className="btn btn-primary">Website Link</a>
                            </>
                        ) : (
                            <>
                            </>
                        )
                        }

                    </div>
                    <div className="card-footer text-muted">
                        <p className='card-text'>{technologies}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
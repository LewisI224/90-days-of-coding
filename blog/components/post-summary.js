import Link from 'next/link';
import Image from 'next/image'
import Date from './date';

import styles from './css-modules/post-summary.module.css'

export default function PostSummary ({id, title, subtitle, date, imgurl}) {

    return (
        <div className="col">
            
        <div >
            <Link href={`/posts/${id}`}>
                <a className={styles.link}>

                    <div className='card mb-3' key={id} >
                        
                        <h5 className="card-header"><Date dateString={date} /></h5>
                        {imgurl ? (
                            <>
                            <Image 
                            src={`https://90-days-blog.s3.eu-west-2.amazonaws.com/${imgurl}.png`}
                            alt="Blog Post Image"
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
                            <h5 className="card-title">{title}</h5>
                            <p className='card-text'>{subtitle}</p>
                        </div>

                    </div>
                </a>
            </Link>

            

        </div>


        </div>

    )
    
  }
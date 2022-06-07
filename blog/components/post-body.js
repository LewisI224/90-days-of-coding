import Image from 'next/image'
import Date from './date';

import styles from './css-modules/post-body.module.css'

export default function PostBody({title, subtitle, date, imgurl, text}) {
    return (
        <div>
            <h1>{title}</h1>
            
            <div><Date dateString={date} /></div>
            
            <div className={styles.image}>
                {imgurl ? (
                    <>
                    <Image 
                    src={`https://90-days-blog.s3.eu-west-2.amazonaws.com/${imgurl}.png`}
                    alt="Blog Post Image"
                    width="960px"
                    height="480px"
                    layout='responsive'
                    className="border border-dark rounded"
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
                    className="border border-dark rounded"
                    priority='true'
                    />
                    </>
                )}
            </div>
            
            <h5>{subtitle}</h5>

            <div dangerouslySetInnerHTML={{__html: text  }}></div>

        </div>
    )




}


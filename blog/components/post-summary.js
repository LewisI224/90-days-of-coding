import Link from 'next/link';
import Image from 'next/image'
import Date from './date';

export default function PostSummary ({id, title, subtitle, date, imgurl}) {

    return (
        <div className="col">
            
        <div >

            <div className='card mb-3' key={id}>
                <h5 className="card-header"><Date dateString={date} /></h5>
                {imgurl ? (
                    <>
                    <Image 
                    src={`/images/${imgurl}.png`}
                    alt="Blog Post Image"
                    width="960px"
                    height="480px"
                    layout='responsive'
                    />
                    </>
                ) : (
                    <>
                    <Image 
                    src={`/images/default.png`}
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

                    <Link href={`/posts/${id}`}>
                        <a className="btn btn-primary">Go To Post</a>
                    </Link>
                </div>
                
                

            </div>

        </div>


        </div>

    )
    
  }
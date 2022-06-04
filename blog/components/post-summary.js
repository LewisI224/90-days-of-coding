import Link from 'next/link';
import Image from 'next/image'
import Date from './date';

export default function PostSummary ({id, title, subtitle, date, imgurl}) {

    return (
        <wrapper>
            

            <div className='card mb-3' style={{width: '24rem'}} key={id}>
                <h5 class="card-header"><Date dateString={date} /></h5>
                {imgurl ? (
                    <>
                    <Image 
                    src={`/../public/images/${imgurl}.png`}
                    alt="Blog Post Image"
                    width="960px"
                    height="480px"
                    layout='responsive'
                    />
                    </>
                ) : (
                    <>
                    <Image 
                    src={`/../public/images/default.png`}
                    alt="Blog Post Image"
                    width="960px"
                    height="480px"
                    layout='responsive'
                    />
                    </>
                )}
                    
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p className='card-text'>{subtitle}</p>

                    <Link href={`/posts/${id}`}>
                        <a class="btn btn-primary">Go To Post</a>
                    </Link>
                </div>
                
                

            </div>

        </wrapper>

    )
    
  }
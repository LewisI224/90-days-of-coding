import Link from 'next/link';
import Date from './date';

export default function PostSummary ({id, title, subtitle, date, imgurl}) {

    return (
        <wrapper>
            

            <div className='card mb-3' key={id}>
                <h5 class="card-header"><Date dateString={date} /></h5>
                <img class="card-img-top" src={imgurl} alt="Blog Post Image"></img>
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
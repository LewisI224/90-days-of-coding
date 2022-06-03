import Link from 'next/link';
import Date from './date';



export default function PostSummary ({id, title, date}) {
    return (
        <li className='listItem' key={id}>
            <Link href={`/posts/${id}`}>
                <a>{title}</a>
            </Link>
            <br />
            <small className='lightText'>
                <Date dateString={date} />
            </small>
        </li>
    )
    
    
  }
import Link from 'next/link';

import styles from './css-modules/header.module.css'

export default function Header () {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href="/" ><a className={styles.logo}>90 Days of Coding</a></Link>
                
                <Link href="/all-posts"><a className={styles.navitem}>View All Posts</a></Link>

                <Link href="/portfolio"><a className={styles.navitem}>Portfolio</a></Link>
            </div>
        </div>
    );

}

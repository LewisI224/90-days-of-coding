import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.css'

export default function Header () {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href="/" ><a className={styles.logo}>90 Days of Coding</a></Link>
                <Link href="/all-posts"><a className={styles.navitem}>All Posts</a></Link>
                <Link href="/about"><a className={styles.navitem}>About</a></Link>
            </div>
        </div>
    );

}

import Logo from '../components/logo';

import styles from './css-modules/layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.content}>
            <Logo />
            <div>{children}</div>
        </div>
    )
}
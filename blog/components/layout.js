import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

import styles from './css-modules/header.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Sidebar />
            <Footer />
        </div>
        
    )
    
}
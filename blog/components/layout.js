import Header from '../components/header'
import Footer from '../components/footer'

import styles from './header.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.body}>{children}</div>
            <Footer />
        </div>
        
    )
    
  }
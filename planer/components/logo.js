import Image from 'next/image'

import styles from './css-modules/logo.module.css'

export default function Logo() {
  return (
    <div className={styles.header}>
        <div className={styles.logowrapper}>
            <Image 
                src="/images/logo.png"
                width='500'
                height='250'
                layout='responsive'
            />
        </div>
            
            
    </div>
  )
}
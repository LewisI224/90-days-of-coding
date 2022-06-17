import Image from 'next/image'

import styles from './css-modules/logo.module.css'

export default function Logo() {
  return (
    <section>
        {/* <div className={styles.logo}>
            <Image 
                src="/images/logo.png"
                width='500'
                height='250'
                layout='responsive'
            />
        </div> */}
        <div className={styles.backgroundWrapper}>
            <div className={styles.background}></div>
        </div>

    </section>

            
  )
}
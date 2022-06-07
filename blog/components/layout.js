import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'

import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous"></script>
            <Head>
                <title>90 Days of Coding</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"></link>
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5"></link>
                <meta name="msapplication-TileColor" content="#008f11"></meta>
                <meta name="theme-color" content="#008f11"></meta>
            </Head>
            <Header />
            <div>
                <div>{children}</div>
            </div>
            <Sidebar />
            <div className="clear" style={{height: '60px'}}></div>
            <Footer />
        </div>
        
    )
    
}
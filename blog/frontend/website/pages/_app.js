import "../styles/layout.css"

import "../styles/components/header.css"
import "../styles/components/footer.css"

import "../styles/pages/homepage.css"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
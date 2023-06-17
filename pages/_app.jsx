import Head from 'next/head'
import '../styles/globals.css'
import PropTypes from 'prop-types'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zappipizza</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

import type { NextPage } from 'next'
import Footer from '../Footer'
import NavBar from '../NavBar'
import Head from 'next/head'
const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/../../assets/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <NavBar />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default Layout

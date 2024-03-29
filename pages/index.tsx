import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Introduction from './components/introduction'
import About from './components/about'
import NavigationBar from './components/navigationbar'
import Projects from './components/projects'
import Experience from './components/experience'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin Studna </title>
        <meta name="description" content="Martin Studna | AI Engineer" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <NavigationBar/>

      <main className={styles.main}>
        <Introduction/>
        <About/>
        <Experience/>
        <Projects/>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

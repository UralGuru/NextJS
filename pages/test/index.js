import Head from 'next/head';
import Question from "../../components/pages/questionPage/question";
import styles from './test.module.css'
import Header from "../../components/pages/headerPage/heder";
import Navbar from "../../components/pages/navbarPage/navbar";




function Test() {
    return (<div className={styles.appWrapper}>
            <Head>
                <title>Test</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar />

            <div className={styles.main}>

                <Header />

                <main className={styles.appWrapperContent}>
                    <Question />
                </main>
            </div>
        </div>
    )};

export default Test;

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Question from "./pages/questionPage/question";
import {ImageConfigContext} from "next/dist/shared/lib/image-config-context";


export default function Home() {
    return (
        <div className={styles.appWrapper}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>

            <div className={styles.navbar}>
                <div className={styles.arrow}><i className={styles.arrowLeft}/></div>
                {[...Array(20)].map((e, i) => <div className={styles.box} key={i}>{i + 1}</div>)}
            </div>
            <div className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}><img
                            src='/question.svg' width={'50px'} alt='question'/>8/20
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}><img src='/clock.svg' width={'50px'}
                                                                                  alt='clock'/>60:00
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                        fontSize: '1.7em',
                        color: '#828282'
                    }}>РУСЬ И ЗОЛОТАЯ ОРДА
                    </div>
                    <div><img src='/bulb.svg' width={'50px'} alt='bulb'/></div>

                </header>

                <main className={styles.appWrapperContent}>
                    <div className={styles.mainContent}>
                        <Question/>
                    </div>

                </main>
            </div>
        </div>
    )
}

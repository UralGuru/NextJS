import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
    return (<div className={styles.appWrapper}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>

            <h1>
                <Link href={"/test"}>
                    HomePage
                </Link>

            </h1>

        </div>
    )
};

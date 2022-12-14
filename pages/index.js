import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
    return (<div className={styles.appWrapper}>
            <Head>
                <title>Quiz</title>
            </Head>
            <div>
                <h1 className={styles.title}>
                    <Link href={"/test"}>Quiz</Link>
                    <div className={styles.gradient}></div>
                </h1>
            </div>

        </div>
    )
};

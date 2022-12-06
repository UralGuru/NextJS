import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Home() {
    return (<div className={styles.appWrapper}>
            <Head>
                <title>Quiz</title>
            </Head>
            <h1>
                <Link href={"/test"}>HomePage</Link>
            </h1>
        </div>
    )
};

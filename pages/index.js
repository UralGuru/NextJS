import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (<div className={styles.appWrapper}>
            <Head>
                <title>Quiz</title>
            </Head>
            <div>
                <h1 className={styles.title}>
                    <div className={styles.btnStart}>
                        <Link href={"/test"}>Quiz start</Link>
                    </div>

                    <div className={styles.gradient}></div>
                </h1>
            </div>

        </div>
    )
};

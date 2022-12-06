import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useRouter } from "next/router";
import Head from 'next/head';
import Question from "../../components/pages/questionPage/question";
import Header from "../../components/pages/headerPage/heder";
import Navbar from "../../components/pages/navbarPage/navbar";
import styles from './test.module.css'
import Tests from "../../components/pages/testsPage/tests";
import { getTest } from "../api/test";


function Test(props) {
    const question = useSelector((state)=>state.test.questions);
    const router = useRouter();
    const questionNum = !!router.query.index ? router.query.index[0]-1 : NaN

    useEffect(()=>{
        console.log("index", props.res[0]);
    }, [])

    return (<div className={styles.appWrapper}>
            <Head>
                <title>Test</title>
            </Head>
            <Navbar len={5}/>
            <div className={styles.main}>
                <Header />
                <main className={styles.appWrapperContent}>
                    {/*<Question />*/}
                    {isNaN(questionNum)
                        ? <Tests />
                        : <Question question={question[questionNum]}/>}
                </main>
            </div>
        </div>
    )};
export default Test;

export async function getServerSideProps(context){
    let res = await getTest(1);
    delete res[0]._id
    return {props: {res}}
}


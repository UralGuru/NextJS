import Head from 'next/head';
import Question from "../../components/pages/questionPage/question";
import styles from './test.module.css'
import Header from "../../components/pages/headerPage/heder";
import Navbar from "../../components/pages/navbarPage/navbar";
import {useSelector, useDispatch} from 'react-redux';
import {useRouter} from "next/router";


function Test() {
    const question = useSelector((state)=>state.test.questions);
    const router = useRouter();
    const questionNum = !!router.query.index ? router.query.index[0]-1 : NaN


    return (<div className={styles.appWrapper}>
            <Head>
                <title>Test</title>
            </Head>

            <Navbar len={5}/>

            <div className={styles.main}>

                <Header />

                <main className={styles.appWrapperContent}>
                    {/*<Question />*/}
                    {isNaN(questionNum) ? 'Loading...' : <Question question={question[questionNum]}/>}
                </main>
            </div>
        </div>
    )};

export default Test;

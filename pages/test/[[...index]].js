import Head from 'next/head';
import Question from "../../components/pages/questionPage/question";
import styles from './test.module.css'
import Header from "../../components/pages/headerPage/heder";
import Navbar from "../../components/pages/navbarPage/navbar";
import {useSelector, useDispatch} from 'react-redux';
import {useRouter} from "next/router";
import Tests from "../../components/pages/testsPage/tests";
import {getTest} from "../api/test";
import {useEffect} from "react";
import {setQuestion} from "../../slices/questionSlices";


function Test(props) {
    const question = useSelector((state)=>state.test.questions);
    const router = useRouter();
    const dispatch = useDispatch();
    const questionNum = !!router.query.index ? router.query.index[0]-1 : NaN

    useEffect(()=>{
        // console.log(props.res[0]);
        dispatch(setQuestion(props.res[0]))
    }, [])

    console.log(question)

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
    const {params, query} =context;
    let res = await getTest(1);
    delete res[0]._id
    return {props: {res}}
}


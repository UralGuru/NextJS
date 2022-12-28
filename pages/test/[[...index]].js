import {useSelector} from 'react-redux';
import {useRouter} from "next/router";
import Head from 'next/head';
import Question from "../../components/pages/questionPage/question";
import Header from "../../components/pages/headerPage/heder";
import Navbar from "../../components/pages/navbarPage/navbar";
import styles from './test.module.css'
import Tests from "../../components/pages/testsPage/tests";
import {getTest} from "../api/test";


function Test(props) {
    // console.log(props.res[0])
    const question = useSelector((state) => state.test.questions);
    // const question = props.res[0];
    const router = useRouter();
    const questionNum = !!router.query.index ? router.query.index[0] - 1 : NaN

    return (<div className={styles.appWrapper}>
            <Head>
                <title>Test</title>
            </Head>
            <Navbar len={5}/>
            <div className={styles.main}>
                <Header/>
                <main className={styles.appWrapperContent}>
                    {/*<Question />*/}
                    {isNaN(questionNum)
                        ? <Tests/>
                        : <Question question={question[questionNum]}/>}
                </main>
            </div>
        </div>
    )
};
export default Test;

export async function getServerSideProps(context) {

    let res = await getTest(1);
    delete res[0]._id
    return {props: {res}}
}


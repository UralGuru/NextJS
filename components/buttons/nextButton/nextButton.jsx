import s from "./nextButton.module.css"
import Link from "next/link";

function NextPageButton({id, count}) {

    const hrefURL = (id-1 !== count) ? `/test/${id}` : `/test/${id - 1}`;
    const activeClassName = (id-1 !== count) ? s.button : s.diactive;



    return <div>
        <Link href={hrefURL}>
            <div className={activeClassName}>
                Далее
            </div>
        </Link>


    </div>
}

export default NextPageButton
import s from "./pressButton.module.css"
import Link from "next/link";

function PressButton() {
    return <div>
        <Link href={"/test/1"}>
            <div className={s.button} >
                First test
            </div>
        </Link>


    </div>
}

export default PressButton
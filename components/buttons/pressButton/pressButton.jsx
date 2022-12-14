import s from "./pressButton.module.css"
import Link from "next/link";

function PressButton({link, title}) {
    return <div>
        <Link href={link}>
            <div className={s.button}>
                {title}
            </div>
        </Link>


    </div>
}

export default PressButton
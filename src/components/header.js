import Link from "next/link";
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.headersides}>
                <Link href="/">
                    <img src={"/logo.svg"} />
                </Link>
            </div>
            <div className={styles.headersides} id={styles.headbtns}>
                <div className={styles.headbtn}>
                    город
                </div>
                <div className={styles.headbtn} id={styles.lk}>
                    <Link href="/lk">вход</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
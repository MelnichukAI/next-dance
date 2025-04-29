import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link href="/">
                <img src={"/logo.svg"} />
            </Link>
            <div id="headbtns">
                <div className="headbtn">
                    город
                </div>
                <div className="headbtn" id="log_in">
                    вход
                </div>
            </div>
        </header>
    )
}

export default Header
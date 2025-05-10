import Link from "next/link";
import styles from './main.module.css';

export default function Home() {
  return (
    <main>
      <div id={styles.mainleftpart}>
        <div className={styles.mainleftparts} id={styles.mainlefttoppart}>
          <h1>заголовок</h1>
          <p>текст</p>
        </div>
        <div className={styles.mainleftparts}>
          <div id={styles.mainleftpack}>
            <div id={styles.maindiv}>
              <input type="text" placeholder="поиск"/>
              <button id={styles.mainsqbtn}></button>
            </div>
            <div id={styles.mainbtndiv}>
              <Link href="/trainers">
                <button id={styles.mainlowbtn}>найти</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.mainpic}></div>
    </main>
  );
}

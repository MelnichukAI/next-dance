import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div id="mainleftpart">
        <div className="mainleftparts" id="mainlefttoppart">
          <h1>заголовок</h1>
          <p>текст</p>
        </div>
        <div className="mainleftparts">
          <div id="mainleftpack">
            <div id="maindiv">
              <input type="text" placeholder="поиск"/>
              <button id="mainsqbtn"></button>
            </div>
            <div id="mainbtndiv">
              <Link href="/trainers">
                <button id="mainlowbtn">найти</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="mainpic"></div>
    </main>
  );
}

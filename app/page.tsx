import { Game } from "@/interfaces";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  // hämta populära spel från API
  const res = await fetch(`https://api.rawg.io/api/games?key=<API-NYCKEL-HÄR>`);
  const data = await res.json();
  console.log(data);

  // få enbart de 6 första spelen
  const popularGames: Game[] = data.results.slice(0, 6);

  return (
    <main className={styles.main}>
      <h1>Populära spel just nu</h1>
      <section>
        {popularGames.map((game) => (
          <li key={game.id}>
            {/* <Image
              src={game.background_image}
              alt={game.name}
              width={100}
              height={100}
            /> */}
            <p>{game.name}</p>
          </li>
        ))}
      </section>
    </main>
  );
}

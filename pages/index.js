import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CFG recipes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1 className="someHeading">CFG recipes</h1>
          <h2 className="typeOfRecipes">What's popular</h2>
          <h3><Link href="/page1">Creamy vegan mushroom pasta</Link></h3>
          <h3><Link href="/page1"><img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/vegan_mushroom_pasta_28266_16x9.jpg"/></Link></h3>
          <h3><Link href="/page2">Roasted squash salad with pomegranate dressing</Link></h3>
          <h3><Link href="/page2"> <img src="https://realfood.tesco.com/media/images/TESCO-01-Xmas-FestiveMenuHelperRecipes-2910-GM-54718-RoastedSquashSaladWithPomegranteDressingVeganGF-1400x919-1c7e714f-2cc3-4cb7-86e6-7fccd1d28ab5-0-1400x919.jpg" /></Link></h3>
          <h3><Link href="/page3">Florentine pizza</Link></h3>
          <img src="https://realfood.tesco.com/media/images/Florentine-pizza-LGH-2cc73fa2-bc01-4120-8dbd-c364556b499b-0-1400x919.jpg"/>
          <h2 className="typeOfRecipes">Vegan recipes</h2>
          <h3><Link href="/page1">Creamy vegan mushroom pasta</Link> </h3>
          <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/vegan_mushroom_pasta_28266_16x9.jpg"/>
          <h3><Link href="/page2">Roasted squash salad with pomegranate dressing</Link> </h3>
          <img src="https://realfood.tesco.com/media/images/TESCO-01-Xmas-FestiveMenuHelperRecipes-2910-GM-54718-RoastedSquashSaladWithPomegranteDressingVeganGF-1400x919-1c7e714f-2cc3-4cb7-86e6-7fccd1d28ab5-0-1400x919.jpg" />
        </div>
      </main>
    </>
  );
}

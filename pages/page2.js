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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <Link href={"/"}>Back to home</Link>
          <h1 className="h1page1">Page 2</h1>
          <h2 className="h2page1">
            Roasted squash salad with pomegranate dressing
          </h2>
          <img src="https://realfood.tesco.com/media/images/TESCO-01-Xmas-FestiveMenuHelperRecipes-2910-GM-54718-RoastedSquashSaladWithPomegranteDressingVeganGF-1400x919-1c7e714f-2cc3-4cb7-86e6-7fccd1d28ab5-0-1400x919.jpg" />
          <h3 className="h3page1">Ingredients:</h3>
          <ul className="ingpage1">
            <li>1 medium butternut squash, peeled and chopped</li>
            <li>3 tbsp olive oil</li>
            <li>220g tomatoes </li>
            <li>50g walnuts, roughly chopped </li>
            <li>150g baby spinach leaves</li>
            <li>6 tbsp pomegranate juice </li>
            <li>3 tbsp extra-virgin olive oil </li>
            <li>1 tsp Dijon mustard </li>
            <li>2 tbsp pomegranate seeds </li>
          </ul>
          <h4>Recipe:</h4>
          <ul>
            <li>
              Preheat the oven to gas 8, 220°C, fan 200°C. Put the butternut
              squash, olive oil and some seasoning in a large roasting tin and
              toss to combine. Roast for 20 mins.
            </li>
            <li>
              Add the tomatoes and walnuts to the tin and return to the oven for
              a further 15 mins until the tomatoes have burst in places and the
              walnuts are toasted.
            </li>
            <li>
              Put the spinach leaves in a large serving bowl and add the hot
              butternut squash, tomatoes and walnuts; toss to wilt the spinach
              slightly.
            </li>
            <li>
              For the dressing, mix together the pomegranate juice, olive oil
              and mustard. Pour half over the salad and toss again.
            </li>
            <li>
              Divide between 4 plates and spoon over the remaining dressing,
              then scatter with the pomegranate seeds to serve.
            </li>
          </ul>
          <h4>You may also like...</h4>
          <Link href="/page1">Creamy vegan mushroom pasta</Link>
        </div>
      </main>
    </>
  );
}

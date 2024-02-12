import Link from "next/link";
import style from './style.module.css'
import {getCurrentWeather} from "@/utils/getCurrentWeather";

export default async function Home() {
  const res = await getCurrentWeather(`seoul`)

  return (
    <>
      <h1>Home</h1>
      <ul className={style.list}>
        <li><Link href="/seoul">서울</Link></li>
        <span>{res.current.condition.text}</span>
        <li><Link href="/new-york">뉴욕</Link></li>
        <li><Link href="/london">런던</Link></li>
      </ul>
    </>
  );
}
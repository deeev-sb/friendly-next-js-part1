import Link from "next/link";
import style from './style.module.css'
import {getCurrentWeather} from "@/utils/getCurrentWeather";
import RevalidateButton from "@/component/RevalidateButton";
import {getTime} from "@/utils/getTime";

export default async function Home() {
  const res = await getCurrentWeather(`seoul`)
  const time = await getTime(res.location.tz_id)

  return (
    <>
      <h1>Home</h1>
      <p>{time.dateTime}</p>
      <RevalidateButton tag={'time'}/>
      <ul className={style.list}>
        <li><Link href="/seoul">서울</Link></li>
        <span>{res.current.condition.text}</span>
        <li><Link href="/new-york">뉴욕</Link></li>
        <li><Link href="/london">런던</Link></li>
      </ul>
    </>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li><Link href="/seoul">서울</Link></li>
        <li><Link href="/newyork">뉴욕</Link></li>
        <li><Link href="/london">런던</Link></li>
      </ul>
    </>
  );
}
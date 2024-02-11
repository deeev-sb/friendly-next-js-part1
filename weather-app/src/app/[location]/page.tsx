'use client'

import {useRouter} from "next/navigation";

type Props = {
  params: {
    location: string
  }
}

export default function Detail({params}: Props) {
  let name = ''

  const router = useRouter();
  const handleClick = () => {
    router.push('/')
  }

  switch (params.location){
    case 'seoul': name = '서울'; break;
    case 'newyork': name = '뉴욕'; break;
    case 'london': name = '런던'; break;
  }
  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <button onClick={handleClick}>Home</button>
    </>
  );
}
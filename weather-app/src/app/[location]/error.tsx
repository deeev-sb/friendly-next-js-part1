'use client'

import {useEffect} from "react";
import HomeButton from "@/component/HomeButton";

type Props = {
  error: Error;
}
export default function Error({error}: Props) {
  useEffect(() => {
    console.error('-------', error.message)
  }, [])
  return <>
    <h1>에러 페이지</h1>
    <p>{error.message}</p>
    <HomeButton/>
  </>
}
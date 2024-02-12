interface Response {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  seconds: number
  milliSeconds: number
  dateTime: string
  date: string
  time: string
  timeZone: string
  dayOfWeek: string
  dstActive: boolean
}

export const getTime = async (zone: string): Promise<Response> => {
  const res = await fetch(`http://timeapi.io/api/Time/current/zone?timeZone=${zone}`,
    {next: {tags: ['time']}})

  if (!res.ok) throw new Error('시간 정보를 가져올 수 없습니다.')

  return res.json();
}
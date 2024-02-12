import HomeButton from "@/component/HomeButton";
import {getForecast} from "@/utils/getForecast";

type Props = {
  params: {
    location: string
  }
}

export default async function Detail({params}: Props) {
  let name = ''

  const res = await getForecast(params.location);

  switch (params.location){
    case 'seoul': name = '서울'; break;
    case 'newyork': name = '뉴욕'; break;
    case 'london': name = '런던'; break;
  }
  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <HomeButton/>
      <ul>
        {res.forecast.forecastday.map(day => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
          )
        )}
      </ul>
    </>
  );
}
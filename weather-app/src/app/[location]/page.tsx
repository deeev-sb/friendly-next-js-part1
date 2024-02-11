type Props = {
  params: {
    location: string
  }
}

export default function Detail({params}: Props) {
  let name = ''
  switch (params.location){
    case 'seoul': name = '서울'; break;
    case 'newyork': name = '뉴욕'; break;
    case 'london': name = '런던'; break;
  }
  return (
    <>
      <h1>{name}의 3일 예보</h1>
    </>
  );
}
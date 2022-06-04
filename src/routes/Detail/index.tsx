import { useParams } from 'react-router-dom'

const Detail = () => {
  const { coinId } = useParams()

  console.log(coinId)

  return <div>{coinId}Detail Page</div>
}

export default Detail

import { useParams } from 'react-router-dom'

const Detail = () => {
  const { coinId } = useParams()

  return <div>{coinId}Detail Page</div>
}

export default Detail
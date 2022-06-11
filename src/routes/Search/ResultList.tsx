import CoinCard from 'components/CoinCard'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { getCoinTickers } from 'services/coin'
import style from './search.module.scss'

interface IProps {
  keyword: string
}

const ResultList = ({ keyword }: IProps) => {
  const { data } = useQuery([`#allCoinTickerList`], () => getCoinTickers(), {
    refetchOnWindowFocus: false,
    suspense: true,
    cacheTime: Infinity,
    useErrorBoundary: true,
  })

  const result = useMemo(() => {
    if (!data) return []
    return data.filter((item: ITickerProps) => item.name.startsWith(keyword))
  }, [data, keyword])

  return (
    <div className={style.resultListContainer}>
      <h2>검색 결과</h2>
      <ul>
        {result.map((item: ITickerProps) => (
          <CoinCard
            key={`search_result_list_${item.id}`}
            coinData={{
              name: item.name,
              symbol: item.symbol,
              price: item.quotes.USD.price,
              percentChange1h: item.quotes.USD.percent_change_1h,
            }}
          />
        ))}
      </ul>
    </div>
  )
}

export default ResultList

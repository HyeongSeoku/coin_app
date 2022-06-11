import CoinCard from 'components/CoinCard'
import { useQuery } from 'react-query'
import { get300CoinTickers } from 'services/coin'

import styles from './search.module.scss'

const DefaultList = () => {
  const { data: defaultList } = useQuery([`defaultList`], () => get300CoinTickers(), {
    refetchOnWindowFocus: false,
    suspense: true,
    cacheTime: Infinity,
    useErrorBoundary: true,
  })

  return (
    <div>
      <h2 className={styles.defaultListTitle}>All coins</h2>
      {defaultList!.map((item: ITickerProps) => (
        <CoinCard
          key={`search_list_${item.id}`}
          coinData={{
            name: item.name,
            symbol: item.symbol,
            price: item.quotes.USD.price,
            percentChange1h: item.quotes.USD.percent_change_1h,
          }}
        />
      ))}
    </div>
  )
}

export default DefaultList

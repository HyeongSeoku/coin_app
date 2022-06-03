import axios from 'axios'

interface IHistoryParams {
  coinId: string
  start: string
  interval: string
}

const COIN_BASE_URL = 'https://api.coinpaprika.com'

export const getKeywordCoins = () =>
  axios.get(`/v1/coins`).then((res) => {
    const result: IDropDown[] = []
    res.data.map((item: ICoinData) => result.push({ name: item.name, id: item.id }))
    return result
  })

export const getTop100CoinList = () => axios.get(`v1/coins`).then((res) => res.data.splice(0, 100))

export const getCoinList = () => axios.get(`v1/coins`)

export const getTopp100CoinTickers = () => axios.get(`v1/tickers?quotes=KRW`).then((res) => res.data.splice(0, 100))

export const getCoinTickers = () => axios.get(`v1/tickers?quotes=KRW`)

export const getCoinDetail = (params: IHistoryParams) =>
  axios.get(`v1/tickers/${params.coinId}/historical`, {
    params: {
      start: params.start,
      interval: params.interval,
    },
  })

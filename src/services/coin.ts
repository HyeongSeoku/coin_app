import axios from 'axios'

interface IHistoryParams {
  coinId: string
  start: string
  interval: string
}

const BASE_URL = 'https://api.coinpaprika.com'

export const getKeywordCoins = () =>
  axios.get(`/v1/coins`).then((res) => {
    const spliceRes = res.data.splice(0, 5000)
    const result: IDropDown[] = []
    spliceRes.map((item: ICoinData) => result.push({ name: item.name, id: item.id }))
    return result
  })

export const getTop100CoinList = () => axios.get(`/v1/coins`).then((res) => res.data.splice(0, 100))

export const getCoinList = () => axios.get(`/v1/coins`)

export const getTop100CoinTickers = () => axios.get(`/v1/tickers`).then((res) => res.data.splice(0, 100))

export const getCoinTickers = () => axios.get(`/v1/tickers`).then((res) => res.data)

export const getCoinDetailGraph = (params: IHistoryParams) =>
  axios.get(`/v1/tickers/${params.coinId}/historical`, {
    params: {
      start: params.start,
      interval: params.interval,
    },
  })

export const get300CoinTickers = () => axios.get(`/v1/tickers`).then((res) => res.data.splice(0, 300))

export const getSpecificCoinTicker = (name: string) =>
  axios.get(`/v1/tickers`).then((res) => res.data.find((item: ITickerProps) => item.name === name))

export const getDetailData = async (coinName: string, apiStart: string) => {
  const coinDetail: ITickerProps = await getSpecificCoinTicker(coinName)
  const { id } = coinDetail
  const coinGraph = await getCoinDetailGraph({ coinId: id, start: apiStart, interval: '1h' }).then((res) => res.data)

  return [coinDetail, coinGraph]
}

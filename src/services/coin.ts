import axios from 'axios'

interface ITickerParams {
  quotes: string
}

interface IHistoryParams {
  coinId: string
  start: string
  interval: string
}

const COIN_BASE_URL = 'https://api.coinpaprika.com'

export const getCoinList = () => axios.get(`${COIN_BASE_URL}/v1/coins`)

export const getCoinTickers = (params: ITickerParams) =>
  axios.get(`${COIN_BASE_URL}/v1/tickers`, {
    params: { ...params },
  })

export const getCoinDetail = (params: IHistoryParams) =>
  axios.get(`${COIN_BASE_URL}/v1/tickers/${params.coinId}/historical`, {
    params: {
      start: params.start,
      interval: params.interval,
    },
  })

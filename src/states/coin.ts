import { atom } from 'recoil'

export const coinTickerListState = atom<ITickerProps[]>({
  key: 'coinTickerListState',
  default: [],
})

export const top10IncreaseCoinState = atom<ITickerProps[]>({
  key: 'top10IncreaseCoinStateState',
  default: [],
})

export const coinKeyWordState = atom<IDropDown[]>({
  key: 'coinKeyWordState',
  default: [],
})

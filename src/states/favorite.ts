import { FAV_STORE } from 'constants/favorite'
import { atom } from 'recoil'
import store from 'store'

export const favoriteListState = atom<ICoinCardData[]>({
  key: 'favoriteListState',
  default: store.get(FAV_STORE) || [],
})

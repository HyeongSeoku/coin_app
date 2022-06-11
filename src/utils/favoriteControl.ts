import store from 'store'

import { FAV_STORE } from 'constants/favorite'

const addFavorite = (list: ICoinCardData[], targetObj: ICoinCardData) => {
  store.set(FAV_STORE, [targetObj, ...list])
}

const deleteFavorite = (list: ICoinCardData[], targetName: string) => {
  const filteredList = list.filter((item) => item.name !== targetName)
  store.set(FAV_STORE, filteredList)
}

export const handleFavoriteList = (isFav: boolean, list: ICoinCardData[], targetObj: ICoinCardData) => {
  const { name } = targetObj
  isFav ? deleteFavorite(list, name) : addFavorite(list, targetObj)
}

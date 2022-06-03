import { atom } from 'recoil'

export const searchKeyWordState = atom({
  key: 'searchKeyWordState',
  default: '',
})

export const dropDownOpenState = atom({
  key: 'dropDownOpenState',
  default: false,
})

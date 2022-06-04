import { HOME_TOGGLE } from 'constants/home'
import { atom } from 'recoil'

export const homeToggleState = atom({
  key: 'homeToggleState',
  default: HOME_TOGGLE[0].name,
})

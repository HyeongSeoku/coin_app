import { DownIcon, NotChangeIcon, UpIcon } from 'assets/svgs'
import { useMemo } from 'react'

export const useVariance = (percent: number) => {
  const [varianceText, varianceIcon] = useMemo(() => {
    let icon = <NotChangeIcon />
    let text = 'equl'
    if (!percent) return [text, icon]

    if (percent > 0) {
      icon = <UpIcon />
      text = 'up'
      return [text, icon]
    }

    icon = <DownIcon />
    text = 'down'
    return [text, icon]
  }, [percent])

  return [varianceText, varianceIcon]
}

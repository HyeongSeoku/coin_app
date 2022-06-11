import dayjs from 'dayjs'

const DEFAULT_FORMAT = 'YYYY-MM-DDTHH:mm:ss[Z]'

export const calculateDate = () => {
  const nowDay = dayjs().format('YYYY-MM-DD')
  const nowTime = dayjs().get('hour')
  const transformTime = dayjs(`${nowDay}T${nowTime}:00:00`)
  const endTime = transformTime.add(-8, 'hour')
  const startTime = endTime.add(-24, 'hour')

  return [startTime.format(DEFAULT_FORMAT), endTime.format(DEFAULT_FORMAT)]
}

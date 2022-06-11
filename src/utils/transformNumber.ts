export const fixedNumber = (num: number) => {
  // eslint-disable-next-line no-var
  var cnt = 2
  const [, targetDec] = String(num).split('.')
  if (Number(num.toFixed(1)) !== 0) return num.toFixed(1)
  while (cnt <= targetDec.length) {
    if (Number(num.toFixed(cnt)) !== 0) return num.toFixed(cnt)
    cnt += 1
  }
  return num.toFixed(cnt)
}

export const transformNumber = (num: number) => {
  const [K, M, B] = [1000, 1000000, 1000000000]
  if (num >= B) return [fixedNumber(num / B), 'B']
  if (num >= M) return [fixedNumber(num / M), 'M']
  if (num >= K) return [fixedNumber(num / K), 'K']
  return [fixedNumber(num), '']
}

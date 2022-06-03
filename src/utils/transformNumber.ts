export const transformNumber = (num: number) => {
  const [K, M, B] = [1000, 1000000, 1000000000]
  if (num >= B) return [(num / B).toFixed(1), 'B']
  if (num >= M) return [(num / M).toFixed(1), 'M']
  if (num >= K) return [(num / K).toFixed(1), 'K']
  return [num.toFixed(1), '']
}

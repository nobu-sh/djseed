export function createRange(start: number, end: number): number[] {
  const range = []
  for (let i = start; i <= end; i++) {
    range.push(i)
  }

  return range
}

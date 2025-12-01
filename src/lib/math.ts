export function avg(...args: number[]) {
  return args.reduce((acc, val) => acc + val, 0) / args.length
}

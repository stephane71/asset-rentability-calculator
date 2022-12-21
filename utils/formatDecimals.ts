export function formatDecimals(n: number, decimals: number) {
  return n * 10 ** -decimals.toFixed(decimals);
}

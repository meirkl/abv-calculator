export function calculateAbv(og: number, fg: number) {
  // formula source: https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
  return ((76.08 * (og - fg)) / (1.775 - og)) * (fg / 0.794);
}

export function formatValue(value: number, fractionDigits: number = 3) {
  return Number(value.toFixed(fractionDigits));
}

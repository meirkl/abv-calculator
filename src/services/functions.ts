// formula source: https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
export function calculateAbvStandard(og: number, fg: number) {
  return (og - fg) * 131.25;
}

export function calculateAbvAlternate(og: number, fg: number) {
  return ((76.08 * (og - fg)) / (1.775 - og)) * (fg / 0.794);
}

export function formatValue(value: number, fractionDigits: number = 3) {
  return Number(value.toFixed(fractionDigits));
}

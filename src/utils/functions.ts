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

export function brixToSG(brix: number) {
  return brix / (258.6 - (brix / 258.2) * 227.1) + 1;
}

export function SGToBrix(SG: number) {
  return ((182.4601 * SG - 775.6821) * SG + 1262.7794) * SG - 669.5622;
}

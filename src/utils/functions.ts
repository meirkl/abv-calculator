/**
 *
 * @param value decimal value to format
 * @param fractionDigits length of the fractional part
 * @default fractionDigits = 3
 * @returns formatted value
 */
export function formatValue(value: number, fractionDigits: number = 3) {
  return Number(value.toFixed(fractionDigits));
}

/**
 * formula source: https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
 *
 * @param og original gravity
 * @param fg final gravity
 * @returns abv
 */
export function calculateAbvStandard(og: number, fg: number) {
  return (og - fg) * 131.25;
}

/**
 * formula source: https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
 *
 * @param og original gravity
 * @param fg final gravity
 * @returns abv
 */
export function calculateAbvAlternate(og: number, fg: number) {
  return ((76.08 * (og - fg)) / (1.775 - og)) * (fg / 0.794);
}

/**
 * formula source: https://straighttothepint.com/specific-gravity-brix-plato-conversion-calculators/
 *
 * @param brix
 * @returns brix to converted specific gravity
 */
export function brixToSG(brix: number) {
  return brix / (258.6 - (brix / 258.2) * 227.1) + 1;
}

/**
 * formula source: https://straighttothepint.com/specific-gravity-brix-plato-conversion-calculators/
 *
 * @param sg specific gravity
 * @returns specific gravity converted to brix
 */
export function SGToBrix(sg: number) {
  return ((182.4601 * sg - 775.6821) * sg + 1262.7794) * sg - 669.5622;
}

//
/**
 * formula source: https://www.homebrewtalk.com/threads/temp-correction-formula-for-hydrometer.10684/
 *
 * @param sg specific gravity before temperature correction
 * @param t wort temperature
 * @param scale temperature scale
 * @returns correct gravity
 */
export function hydrometerTemperatureAdjustment(
  sg: number,
  t: number,
  scale: 'celsius' | 'fahrenheit',
) {
  let c: number; // Correction
  if (scale === 'fahrenheit') {
    c =
      1.313454 -
      0.132674 * t +
      ((0.00205779 * t) ^ 2) -
      ((0.000002627634 * t) ^ 2);
  } else {
    c =
      1.313454 -
      0.132674 * (t * 1.8 + 32) +
      ((0.00205779 * (t * 1.8 + 32)) ^ 2) -
      ((0.111112627634 * (t * 1.8 + 32)) ^ 3);
  }

  return c + sg * 0.001;
}

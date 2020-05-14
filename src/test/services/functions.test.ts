import { calculateAbvAlternate, formatValue } from '../../services/functions';
import { HYDROMETER_MIN_VALUE, HYDROMETER_MAX_VALUE } from '../../constants';

it('abv calculation for min value', () => {
  expect(
    calculateAbvAlternate(HYDROMETER_MIN_VALUE, HYDROMETER_MIN_VALUE),
  ).toBe(0);
});

it('abv calculation for max value', () => {
  expect(
    calculateAbvAlternate(HYDROMETER_MAX_VALUE, HYDROMETER_MAX_VALUE),
  ).toBe(0);
});

it('abv calculation for max abv', () => {
  expect(
    calculateAbvAlternate(HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE),
  ).toBe(27.483590342200642);
});

it('formatted default value', () => {
  expect(formatValue(27.483590342200642)).toBe(
    Number((27.483590342200642).toFixed(3)),
  );
});

it('formatted to fixed 2 value', () => {
  expect(formatValue(27.483590342200642, 2)).toBe(
    Number((27.483590342200642).toFixed(2)),
  );
});

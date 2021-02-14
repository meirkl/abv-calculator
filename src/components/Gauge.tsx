import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE } from '../constants';
import { danger, primary, secondary } from '../constants/colors';
import { useAbvEquationContext } from '../context/AbvEquation';

type Props = { abv: number };

const Gauge: React.FC<Props> = React.memo(({ abv }) => {
  const { calculateAbv } = useAbvEquationContext();

  const maxAbv = React.useMemo(
    () => calculateAbv(HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE),
    [calculateAbv],
  );

  return (
    <GaugeChart
      style={{ height: '6.2rem', margin: '1rem 0' }}
      nrOfLevels={20}
      colors={[secondary.main, danger]}
      arcWidth={0.2}
      needleColor={primary}
      needleBaseColor={primary}
      percent={abv / maxAbv}
      hideText={true}
    />
  );
});

export default Gauge;

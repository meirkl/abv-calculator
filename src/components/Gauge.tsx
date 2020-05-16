import React, { useMemo } from 'react';
import GaugeChart from 'react-gauge-chart';
import { HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE } from '../constants';
import { danger, primary, secondary } from '../constants/colors';
import { useAbvEquationContext } from '../context/AbvEquation';

type Props = { abv: number };

const Gauge = ({ abv }: Props): React.ReactElement => {
  const { calculateAbv } = useAbvEquationContext();

  const maxAbv = useMemo(
    () => calculateAbv(HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE),
    [calculateAbv],
  );

  return (
    <GaugeChart
      id="abv-gauge"
      style={{ height: '100px', margin: '15px 0' }}
      nrOfLevels={20}
      colors={[secondary, danger]}
      arcWidth={0.2}
      needleColor={primary}
      needleBaseColor={primary}
      percent={abv / maxAbv}
      hideText={true}
    />
  );
};

export default Gauge;

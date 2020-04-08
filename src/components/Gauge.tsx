import React, { useMemo } from 'react';
import GaugeChart from 'react-gauge-chart/dist/GaugeChart';
import { green, red, yellow } from '../constants/colors';
import { HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE } from '../constants';
import { calculateAbv } from '../services/functions';

interface Props {
  abv: number;
}

const Gauge = ({ abv }: Props) => {
  const maxAbv = useMemo(
    () => calculateAbv(HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE),
    [],
  );

  return (
    <GaugeChart
      id="abv-gauge"
      style={{ height: '100px', margin: '25px' }}
      nrOfLevels={5}
      colors={[green, red]}
      arcWidth={0.3}
      needleColor={yellow}
      needleBaseColor={yellow}
      percent={abv / maxAbv}
      hideText={true}
    />
  );
};

export default Gauge;

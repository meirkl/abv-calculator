import React from 'react';
import GaugeChart from 'react-gauge-chart/dist/GaugeChart';
import { green, red, yellow } from './colors';

const Gauge = ({ abv }) => {
  return (
    <GaugeChart
      id="abv-gauge"
      style={{ height: '100px', margin: '25px' }}
      nrOfLevels={5}
      colors={[green, red]}
      arcWidth={0.3}
      needleColor={yellow}
      needleBaseColor={yellow}
      percent={abv / 24}
      formatTextValue={() => ''}
    />
  );
};

export default Gauge;

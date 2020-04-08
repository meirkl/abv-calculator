import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yellow } from './colors';
import { HYDROMETER_MIN_VALUE } from './constants/Constants';
import Gauge from './Gauge';
import RangeSlider from './RangeSlider';
import { calculateAbv } from './services/functions';

const RangeSliderWrapper = styled.div`
  width: 350px;
`;

const Result = styled.div`
  color: ${yellow};
  font-size: 60px;
  margin: 15px 0;
  span {
    font-size: 40px;
  }
`;

const formatValue = (value: number, fractionDigits: number = 3): number => {
  return Number(value.toFixed(fractionDigits));
};

const Calculator = () => {
  const [og, setOg] = useState(HYDROMETER_MIN_VALUE);
  const [fg, setFg] = useState(HYDROMETER_MIN_VALUE);
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    setAbv(formatValue(calculateAbv(og, fg), 2));
  }, [og, fg]);

  return (
    <>
      <RangeSliderWrapper>
        <RangeSlider
          label="OG"
          value={og}
          onChange={(e) => setOg(formatValue(Number(e.target.value)))}
        />
        <RangeSlider
          label="FG"
          value={fg}
          onChange={(e) => setFg(formatValue(Number(e.target.value)))}
        />
      </RangeSliderWrapper>
      <Gauge abv={abv} />
      <Result>
        <span>ABV</span> {abv}%
      </Result>
    </>
  );
};

export default Calculator;

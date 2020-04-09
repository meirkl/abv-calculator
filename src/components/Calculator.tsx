import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gauge from './Gauge';
import RangeSlider from './RangeSlider';
import { calculateAbv, formatValue } from '../services/functions';
import { HYDROMETER_MIN_VALUE } from '../constants';

const RangeSliderWrapper = styled.div`
  width: 350px;
`;

const Result = styled.div`
  font-size: 3.75rem;
  margin: 15px 0;
  span {
    font-size: 2.5rem;
  }
`;

const Calculator = () => {
  const [og, setOg] = useState(HYDROMETER_MIN_VALUE);
  const [fg, setFg] = useState(HYDROMETER_MIN_VALUE);
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    setAbv(formatValue(calculateAbv(og, fg), 2));
  }, [og, fg]);

  return (
    <>
      <Gauge abv={abv} />
      <Result>
        <span>ABV</span>&nbsp;{`${abv}%`}
      </Result>
      <RangeSliderWrapper>
        <RangeSlider
          label="og"
          value={og}
          onChange={e => setOg(formatValue(Number(e.target.value)))}
        />
        <RangeSlider
          label="fg"
          value={fg}
          onChange={e => setFg(formatValue(Number(e.target.value)))}
        />
      </RangeSliderWrapper>
    </>
  );
};

export default Calculator;

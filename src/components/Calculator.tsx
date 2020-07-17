import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HYDROMETER_MIN_VALUE } from '../constants';
import { useAbvEquationContext } from '../context/AbvEquation';
import { formatValue } from '../utils/functions';
import Gauge from './Gauge';
import RangeSlider from './RangeSlider';

const Calculator: React.FC = () => {
  const { calculateAbv } = useAbvEquationContext();
  const [og, setOg] = useState(HYDROMETER_MIN_VALUE);
  const [fg, setFg] = useState(HYDROMETER_MIN_VALUE);
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    const result = formatValue(calculateAbv(og, fg), 2);
    setAbv(result > 0 ? result : 0);
  }, [og, fg, calculateAbv]);

  return (
    <>
      <Gauge abv={abv} />
      <Result>
        <span>ABV</span>
        {abv}%
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

const RangeSliderWrapper = styled.div`
  width: 350px;
`;

const Result = styled.div`
  font-size: 3.75rem;
  margin: 15px 0;
  span {
    margin-right: 0.7rem;
    font-size: 2.5rem;
  }
`;

export default Calculator;

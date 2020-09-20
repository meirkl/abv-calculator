import React from 'react';
import styled from 'styled-components';
import { HYDROMETER_MIN_VALUE, HYDROMETER_MAX_VALUE } from '../constants';
import { useAbvEquationContext } from '../context/AbvEquation';
import { formatValue } from '../utils/functions';
import Gauge from './Gauge';
import RangeSlider from './RangeSlider';
import { dark } from '../constants/colors';

const Calculator: React.FC = () => {
  const { calculateAbv } = useAbvEquationContext();
  const [og, setOg] = React.useState(HYDROMETER_MIN_VALUE);
  const [fg, setFg] = React.useState(HYDROMETER_MIN_VALUE);
  const [abv, setAbv] = React.useState(0);

  React.useEffect(() => {
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
      <Card>
        <RangeSliderWrapper>
          <RangeSlider
            label="og"
            value={og}
            min={HYDROMETER_MIN_VALUE}
            max={HYDROMETER_MAX_VALUE}
            step={0.001}
            onChange={e => setOg(formatValue(Number(e.target.value)))}
          />
          <RangeSlider
            label="fg"
            value={fg}
            min={HYDROMETER_MIN_VALUE}
            max={HYDROMETER_MAX_VALUE}
            step={0.001}
            onChange={e => setFg(formatValue(Number(e.target.value)))}
          />
        </RangeSliderWrapper>
      </Card>
    </>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  background-color: ${dark.light};
  margin-top: 10px;
  padding: 10px;
  border-radius: 3px;
  padding: 20px;
`;

const RangeSliderWrapper = styled.div`
  width: 100%;
  max-width: 350px;
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

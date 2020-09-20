import React from 'react';
import styled from 'styled-components';
import {
  BRIX_MAX_VALUE,
  BRIX_MIN_VALUE,
  SG_MAX_VALUE,
  SG_MIN_VALUE,
} from '../constants';
import { dark } from '../constants/colors';
import { useDebounce } from '../hooks/useDebounce';
import { brixToSG, formatValue, SGToBrix } from '../utils/functions';
import RangeSlider from './RangeSlider';

const Converter = () => {
  const [brix, setBrix] = React.useState(BRIX_MIN_VALUE);
  const [sg, setSg] = React.useState(SG_MIN_VALUE);

  const debouncedBrix = useDebounce(brix, 250);
  const debouncedSg = useDebounce(sg, 250);

  return (
    <>
      <Card>
        <span>Brix → SG</span>
        <Title>
          <span>SG</span> {formatValue(brixToSG(debouncedBrix))}
        </Title>
        <RangeSliderWrapper>
          <RangeSlider
            label="brix"
            value={brix}
            min={BRIX_MIN_VALUE}
            max={BRIX_MAX_VALUE}
            step={0.1}
            fractionDigits={2}
            onChange={e => setBrix(parseFloat(e.target.value))}
          />
        </RangeSliderWrapper>
      </Card>
      <Card>
        <span>SG → Brix</span>
        <Title>
          <span>Brix</span> {formatValue(SGToBrix(debouncedSg), 2)}
        </Title>
        <RangeSliderWrapper>
          <RangeSlider
            label="sg"
            value={sg}
            min={SG_MIN_VALUE}
            max={SG_MAX_VALUE}
            step={0.001}
            onChange={e => setSg(Number(e.target.value))}
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
  margin-top: 30px;
  padding: 20px;
  border-radius: 3px;
`;

const RangeSliderWrapper = styled.div`
  width: 100%;
  max-width: 350px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  span {
    font-size: 1.6rem;
  }
`;

export default Converter;

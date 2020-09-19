import React from 'react';
import styled from 'styled-components';
import {
  BRIX_MIN_VALUE,
  BRIX_MAX_VALUE,
  SG_MIN_VALUE,
  SG_MAX_VALUE,
} from '../constants';
import { useDebounce } from '../hooks/useDebounce';
import { brixToSG, formatValue, SGToBrix } from '../utils/functions';
import RangeSlider from './RangeSlider';

const BrixConverter = () => {
  const [brix, setBrix] = React.useState(BRIX_MIN_VALUE);
  const [sg, setSg] = React.useState(SG_MIN_VALUE);

  const debouncedBrix = useDebounce(brix, 500);
  const debouncedSg = useDebounce(sg, 500);

  return (
    <>
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
          fractionDigits={1}
          onChange={e => setBrix(formatValue(Number(e.target.value), 1))}
        />
      </RangeSliderWrapper>
      <Title>
        <span>Brix</span> {formatValue(SGToBrix(debouncedSg), 1)}
      </Title>
      <RangeSliderWrapper>
        <RangeSlider
          label="sg"
          value={sg}
          min={SG_MIN_VALUE}
          max={SG_MAX_VALUE}
          step={0.001}
          onChange={e => setSg(formatValue(Number(e.target.value)))}
        />
      </RangeSliderWrapper>
    </>
  );
};

const RangeSliderWrapper = styled.div`
  width: 350px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  span {
    font-size: 1.6rem;
  }
`;

export default BrixConverter;

import React from 'react';
import styled from 'styled-components';
import { secondary, primary } from '../constants/colors';
import { HYDROMETER_MAX_VALUE, HYDROMETER_MIN_VALUE } from '../constants';

const StyledRangeSlider = styled.fieldset`
  padding: 12px 0px;
  border: 0;
  input {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: ${secondary};
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    appearance: none;
    :hover {
      opacity: 1;
    }
    ::-webkit-slider-thumb {
      appearance: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${primary};
      cursor: pointer;
    }
  }
  output {
    display: block;
    padding: 10px;
    color: ${secondary};
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

interface Props {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider = ({ label, value, onChange }: Props): React.ReactElement => (
  <StyledRangeSlider>
    <output>{`${label} \u2013 ${value.toFixed(3)}`}</output>
    <input
      aria-label={label}
      type="range"
      min={HYDROMETER_MIN_VALUE}
      max={HYDROMETER_MAX_VALUE}
      step={0.001}
      value={value}
      onChange={onChange}
    />
  </StyledRangeSlider>
);

export default RangeSlider;

import React from 'react';
import styled from 'styled-components';
import { green, yellow } from './colors';
import {
  HYDROMETER_MAX_VALUE,
  HYDROMETER_MIN_VALUE,
} from './constants/Constants';

const StyledRangeSlider = styled.fieldset`
  padding: 12px 0px;
  border: 0;
  input {
    width: 100%;
    -webkit-appearance: none;
    height: 5px;
    border-radius: 5px;
    background: ${green};
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    :hover {
      opacity: 1;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${yellow};
      cursor: pointer;
    }
  }
  output {
    display: block;
    color: ${green};
    text-align: center;
    font-size: 1.2rem;
    padding: 10px;
  }
`;

interface Props {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider = ({ label, value, onChange }: Props) => (
  <StyledRangeSlider>
    <output>
      {label} &ndash; {value}
    </output>
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

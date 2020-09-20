import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../constants/colors';

type Props = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  fractionDigits?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeSlider: React.FC<Props> = React.memo(
  ({ label, value, min, max, step, fractionDigits = 3, onChange }) => (
    <StyledRangeSlider>
      <output>
        <span>{label}</span>
        {value.toFixed(fractionDigits)}
      </output>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </StyledRangeSlider>
  ),
);

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
    color: ${secondary};
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    span {
      margin-right: 0.4rem;
      font-size: 1rem;
    }
  }
`;

export default RangeSlider;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { green, yellow } from './colors';
import Gauge from './Gauge';

const RangeSliderWrapper = styled.div`
  width: 350px;
`;

const RangeSlider = styled.fieldset`
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

const Result = styled.div`
  color: ${yellow};
  font-size: 60px;
  margin: 15px 0;
  small {
    font-size: 40px;
  }
`;

const formatValue = (value: number, fractionDigits: number): number => {
  return Number(parseFloat(value.toString()).toFixed(fractionDigits));
};

const initialValue = formatValue(0.98, 3);

const Calculator = () => {
  const [og, setOg] = useState(initialValue);
  const [fg, setFg] = useState(initialValue);
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    // formula source: https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/
    const abv = ((76.08 * (og - fg)) / (1.775 - og)) * (fg / 0.794);
    setAbv(formatValue(abv, 2));
  }, [og, fg]);

  return (
    <>
      <RangeSliderWrapper>
        <RangeSlider>
          <output>OG &ndash; {og}</output>
          <input
            aria-label="OG"
            type="range"
            min="0.980"
            max="1.160"
            step="0.001"
            value={og}
            onChange={(e) => setOg(formatValue(Number(e.target.value), 3))}
          />
        </RangeSlider>
        <RangeSlider>
          <output>FG &ndash; {fg}</output>
          <input
            aria-label="FG"
            type="range"
            min="0.980"
            max="1.160"
            step="0.001"
            value={fg}
            onChange={(e) => setFg(formatValue(Number(e.target.value), 3))}
          />
        </RangeSlider>
      </RangeSliderWrapper>
      <Gauge abv={abv} />
      <Result>
        <small>ABV</small> {abv}%
      </Result>
    </>
  );
};

export default Calculator;

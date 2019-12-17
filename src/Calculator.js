import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { green, yellow } from './colors';
import Gauge from './Gauge';

const Form = styled.div`
  width: 350px;
  div {
    padding: 12px 0px;
  }
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

const Calculator = () => {
  const [og, setOg] = useState(parseFloat(0.98).toFixed(3));
  const [fg, setFg] = useState(parseFloat(0.98).toFixed(3));
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    setAbv(((og - fg) * 131.25).toFixed(2));
  }, [og, fg]);
  return (
    <>
      <Form>
        <div>
          <output>OG &ndash; {og}</output>
          <input
            aria-label="OG"
            type="range"
            min="0.980"
            max="1.160"
            step="0.001"
            value={og}
            onChange={e => setOg(parseFloat(e.target.value).toFixed(3))}
          />
        </div>
        <div>
          <output>FG &ndash; {fg}</output>
          <input
            aria-label="FG"
            type="range"
            min="0.980"
            max={og}
            step="0.001"
            value={fg}
            onChange={e => setFg(parseFloat(e.target.value).toFixed(3))}
          />
        </div>
      </Form>
      <Gauge abv={abv} />
      <Result>
        <small>ABV</small> {abv}%
      </Result>
    </>
  );
};

export default Calculator;

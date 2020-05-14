import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import Gauge from './Gauge';
import RangeSlider from './RangeSlider';
import { formatValue, pointInRect } from '../services/functions';
import { HYDROMETER_MIN_VALUE } from '../constants';
import { ReactComponent as SettingsIcon } from '../media/settings.svg';
import { light, secondary, secondaryDark } from '../constants/colors';
import { useAbvEquationContext } from '../context/AbvEquation';

const Calculator = (): React.ReactElement => {
  const { equation, calculateAbv, changeHandler } = useAbvEquationContext();
  const [showSettings, setShowSettings] = useState(false);
  const [og, setOg] = useState(HYDROMETER_MIN_VALUE);
  const [fg, setFg] = useState(HYDROMETER_MIN_VALUE);
  const [abv, setAbv] = useState(0);

  const settingsButtonRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const result = formatValue(calculateAbv(og, fg), 2);
    setAbv(result > 0 ? result : 0);
  }, [og, fg, calculateAbv]);

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (settingsButtonRef && settingsButtonRef.current) {
        const buttonRect = settingsButtonRef.current.getBoundingClientRect();
        if (pointInRect(buttonRect, { x: event.clientX, y: event.clientY })) {
          return;
        }
      }
      if (settingsRef && settingsRef.current) {
        const buttonRect = settingsRef.current.getBoundingClientRect();
        if (pointInRect(buttonRect, { x: event.clientX, y: event.clientY })) {
          return;
        }
      }
      setShowSettings(false);
    };
    window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  }, []);

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
      <SettingsDrawerButton
        onClick={() => setShowSettings(true)}
        ref={settingsButtonRef}
      >
        <StyledSettingsIcon />
      </SettingsDrawerButton>
      <StyledSettings showMenu={showSettings} ref={settingsRef}>
        <h5>Equation</h5>
        <label>
          <input
            type="checkbox"
            name="formula"
            checked={equation === 'standard'}
            onChange={changeHandler}
          />
          Standard
        </label>
        <label>
          <input
            type="checkbox"
            name="formula"
            checked={equation === 'alternate'}
            onChange={changeHandler}
          />
          Alternate
        </label>
      </StyledSettings>
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
    font-size: 2.5rem;
  }
`;

const StyledSettingsCommon = css`
  position: absolute;
  top: calc(80vh / 5);
  left: 0;
  background-color: ${secondaryDark};
  border: 1px solid ${secondary};
  border-left: none;
  border-radius: 0 3px 3px 0;
`;

const SettingsDrawerButton = styled.div`
  ${StyledSettingsCommon};
  padding: 5px;
  display: flex;
  align-items: center;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  width: 35px;
  fill: ${light};
`;

const StyledSettings = styled.div<{ showMenu: boolean }>`
  ${StyledSettingsCommon};
  transform: ${props =>
    props.showMenu ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  padding: 15px;
  h5 {
    font-size: 1.8rem;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 1.5rem;
  }
  [type='checkbox'] {
    content: '';
    width: 1.4em;
    height: 1.4em;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-right: 1em;
    border-radius: 6px;
  }
`;

export default Calculator;

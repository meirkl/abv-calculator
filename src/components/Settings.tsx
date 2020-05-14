import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { light, secondary, secondaryDark } from '../constants/colors';
import { useAbvEquationContext } from '../context/AbvEquation';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { ReactComponent as SettingsIcon } from '../media/settings.svg';

const Settings = () => {
  const wrapperRef = useRef(null);

  const { equation, changeHandler } = useAbvEquationContext();
  useOnClickOutside(wrapperRef, () => setShowSettings(false));

  const [showSettings, setShowSettings] = useState(false);

  return (
    <div ref={wrapperRef}>
      <SettingsDrawerButton onClick={() => setShowSettings(true)}>
        <StyledSettingsIcon />
      </SettingsDrawerButton>
      <StyledSettings showMenu={showSettings}>
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
    </div>
  );
};

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
export default Settings;

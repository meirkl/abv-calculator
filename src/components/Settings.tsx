import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  light,
  secondary,
  secondaryDark,
  secondaryLight,
} from '../constants/colors';
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
        <CheckBox>
          <input
            id="standard"
            type="checkbox"
            checked={equation === 'standard'}
            onChange={changeHandler}
          />
          <span></span>
          <label htmlFor="standard">Standard</label>
        </CheckBox>
        <CheckBox>
          <input
            id="alternate"
            type="checkbox"
            checked={equation === 'alternate'}
            onChange={changeHandler}
          />
          <span></span>
          <label htmlFor="alternate">Alternate</label>
        </CheckBox>
      </StyledSettings>
    </div>
  );
};

const CheckBox = styled.div`
  margin: 25px 0;
  display: flex;
  align-items: center;
  user-select: none;

  label {
    font-size: 1.2rem;
    position: absolute;
    padding-left: 30px;
    cursor: pointer;
  }

  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;

    &:checked {
      ~ span {
        border-color: ${secondaryLight};
        box-shadow: 0px 0px 0px 15px ${secondaryLight} inset;

        &::after {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    border: 2px solid ${secondaryLight};
    box-shadow: 0px 0px 0px 0px ${secondaryLight} inset;
    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
  }
`;

const StyledSettingsCommon = css`
  position: fixed;
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
    props.showMenu ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 15px 25px;
  h5 {
    font-size: 1.8rem;
    text-align: center;
  }
`;
export default Settings;

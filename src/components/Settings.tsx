import React from 'react';
import styled, { css } from 'styled-components';
import { light, secondary } from '../constants/colors';
import { useAbvEquationContext } from '../context/AbvEquation';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const Settings: React.FC = () => {
  const wrapperRef = React.useRef(null);

  const { equation, changeHandler } = useAbvEquationContext();
  useOnClickOutside(wrapperRef, () => setShowSettings(false));

  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div ref={wrapperRef}>
      <SettingsDrawerButton onClick={() => setShowSettings(true)}>
        Σ
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
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  user-select: none;

  label {
    font-size: 1.2rem;
    position: absolute;
    padding-left: 1.8rem;
    cursor: pointer;
  }

  input {
    opacity: 0;
    visibility: hidden;
    position: absolute;

    &:checked {
      ~ span {
        border-color: ${secondary.light};
        box-shadow: 0px 0px 0px 5px ${secondary.light} inset;

        &::after {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  span {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border: 2px solid ${secondary.light};
    box-shadow: 0px 0px 0px 0px ${secondary.light} inset;
    transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
  }
`;

const StyledSettingsCommon = css`
  position: fixed;
  top: 25%;
  left: 0;
  background-color: ${secondary.dark};
  border: 1px solid ${secondary.main};
  border-left: none;
  border-radius: 0 3px 3px 0;
`;

const SettingsDrawerButton = styled.div`
  ${StyledSettingsCommon};
  padding: 0.3rem;
  display: flex;
  align-items: center;
  color: ${light};
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

const StyledSettings = styled.div<{ showMenu: boolean }>`
  ${StyledSettingsCommon};
  transform: ${props =>
    props.showMenu ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9rem 1.5rem;
  h5 {
    font-size: 1.8rem;
    text-align: center;
  }
`;
export default Settings;

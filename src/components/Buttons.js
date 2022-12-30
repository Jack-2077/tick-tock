import React from 'react';
import styled from 'styled-components';
import { ReactComponent as FullScreenIcon } from '../assets/FullScreen.svg';
import { ReactComponent as ExitFullScreenIcon } from '../assets/ExitFullScreen.svg';
import { ReactComponent as CloseIcon } from '../assets/Close.svg';
import { useState, useEffect } from 'react';

const StyledButtonsContainer = styled.div`
  position: absolute;
  z-index: auto;
  top: 2.5em;
  right: 2.5em;

  .buttons-wrapper {
    display: flex;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s ease-out 0s;
  }

  .fade {
    opacity: 0;
  }

  .buttons-wrapper:hover {
    opacity: 1;
  }

  button {
    appearance: none;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-flex;
    flex: 0 1 auto;
    justify-content: center;
    height: 3.65em;
    width: 3.65em;
    padding: 0px;
    transform: translateZ(0px) scale(1);
    transition: transform 0.25s cubic-bezier(0.5, 0, 0.1, 1) 0s,
      opacity 0.25s ease 0s;
    user-select: none;
  }

  button[aria-disabled='false']:hover {
    background-color: rgb(45, 47, 47);
  }

  button:hover {
    color: rgb(255, 255, 255);
  }

  .popup {
    position: absolute;
    inset: 0px auto auto 0px;
    transform: translate(-10px, 60px);
  }

  .popup {
    opacity: 0;
    visibility: hidden;
  }
  button:hover .popup {
    opacity: 1;
    visibility: visible;
  }

  .popup-text {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    padding: 0px 8px;
    white-space: nowrap;
  }

  button {
    margin-left: 4rem;
  }
`;

export default function Buttons({ handleActiveClock }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    if (isFullScreen) {
      setTimeout(() => {
        setShowElement(false);
      }, 3000);
    }
  }, [isFullScreen]);

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };
  return (
    <StyledButtonsContainer>
      <div className={`buttons-wrapper ${!showElement ? 'fade' : ''}`}>
        <button
          aria-disabled={false}
          aria-label={`${isFullScreen ? 'Exit ' : ''}FullScreen`}
          onClick={handleToggleFullScreen}
        >
          {isFullScreen ? <ExitFullScreenIcon /> : <FullScreenIcon />}
          <div className='popup'>
            <div className='popup-text'>
              <span> {`${isFullScreen ? 'Exit ' : ''}FullScreen`}</span>
            </div>
          </div>
        </button>

        <button
          aria-disabled={false}
          aria-label='Exit Full Screen'
          onClick={() => handleActiveClock('')}
        >
          <CloseIcon />
          <div className='popup'>
            <div className='popup-text'>
              <span>Close</span>
            </div>
          </div>
        </button>
      </div>
    </StyledButtonsContainer>
  );
}

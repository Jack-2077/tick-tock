import React, { useState, cloneElement } from 'react';
import styled from 'styled-components/macro';
import DigitalClockImg from '../assets/DigitalClock.jpg';

const StyledCard1 = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 700px;

  .card-info {
    background-color: #2a265f;
    color: #fff;
    padding: 30px;
    max-width: 250px;

    h2 {
      letter-spacing: 1px;
      margin: 10px 0;
    }

    p {
      color: #fff;
      display: inline-block;
      font-size: 12px;
      opacity: 0.6;
      margin-top: 30px;
      text-decoration: none;
    }
  }

  .card-preview {
    padding: 30px;
    position: relative;
    width: 100%;

    img {
      width: 100px;
      height: auto;
    }
    button {
      background-color: #2a265f;
      border: 0;
      border-radius: 50px;
      box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
      color: #fff;
      font-size: 16px;
      padding: 12px 25px;
      position: absolute;
      bottom: 30px;
      right: 30px;
      letter-spacing: 1px;
    }
  }
`;

const StyledCard = styled.div.attrs((props) => ({
  style: {
    color: props.color,
  },
}))`
  background-color: rgb(23, 177, 141);
  width: 20vw;
  button {
    margin: 1em 0;
    width: 100%;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
  }

  input::-moz-color-swatch {
    border-radius: 50%;
    border: none;
  }
`;

export default function Card({ clock, handleActiveClock, children }) {
  const [primaryColor, setThemeColor] = useState('#045975');
  const [showClock, setShowClock] = useState(false);

  const selectClockHandler = () => {
    setShowClock(!showClock);

    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  if (showClock) {
    return <>{cloneElement(children, { primaryColor })}</>;
  }

  return (
    <StyledCard color={primaryColor}>
      <br />
      <br />
      <span>{new Date().toLocaleTimeString('it-IT')}</span>
      <button onClick={selectClockHandler}>Select</button>
      <button>Edit</button>
      <input
        type='color'
        value={primaryColor}
        onChange={(e) => setThemeColor(e.target.value)}
      />
    </StyledCard>
  );
}

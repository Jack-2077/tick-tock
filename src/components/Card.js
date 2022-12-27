import React, { useState, cloneElement } from 'react';
import styled from 'styled-components/macro';
import DigitalClockImg from '../assets/DigitalClock.jpg';
import placeholder from '../assets/DigitalClock.jpg';

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
  /* background-color: rgb(23, 177, 141); */
  background: rgb(24 24 27 / 1);
  margin: 0 auto;
  display: flex;

  .info_container {
    h3 {
      font-size: max(4em, 30px);
    }
  }

  .img__container {
    background: ${(props) => props.color};
    padding: 1rem;
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
  }

  img {
    border-radius: 1rem;
    object-fit: contain;
    width: 500px;
    height: 350px;
  }
  button {
    background-color: rgb(79 70 229 / 1);
    border-radius: 0.75rem;
    width: 3.5rem;
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

export default function Card({ clock, primaryColor, children }) {
  console.log(primaryColor);
  const [themeColor, setThemeColor] = useState(primaryColor);
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
      <div className='info_container'>
        <h3>Pixel Clock</h3>
        <div>
          <label htmlFor='input-color'>Edit</label>
          <input
            type='color'
            name='input-color'
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </div>
        <button onClick={selectClockHandler}>Select</button>
      </div>

      <div className='img__container'>
        <img src={placeholder} alt='preview of clock' />
      </div>
    </StyledCard>
  );
}

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

const StyledCard = styled.div`
  background: rgb(24 24 27 / 1);
  margin: 0 auto;
  display: flex;

  .info_container {
    padding: 2rem;
    h3 {
      font-size: max(2em, 30px);
    }
  }

  .input_buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .edit-color {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .img_container {
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
    cursor: pointer;
    color: #ffffff;
    height: 40px;
    font-size: medium;
    user-select: none;
    background-color: rgb(79 70 229 / 1);
    border-radius: 0.75rem;
    padding: 10px 16px;
    transition: opacity 150ms;
    opacity: 0.9;
    margin-top: 18px;
  }

  button:hover {
    opacity: 1;
  }

  input {
    appearance: none;
    width: 50px;
    height: 50px;
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

export default function Card({ title, handleActiveClock, primaryColor }) {
  const [themeColor, setThemeColor] = useState(primaryColor);

  return (
    <StyledCard color={primaryColor}>
      <div className='info_container'>
        <h3>{title} Clock</h3>
        <div className='input_buttons'>
          <div className='edit-color'>
            <label htmlFor='input-color'>Color</label>
            <input
              type='color'
              name='input-color'
              value={themeColor}
              onChange={(e) => setThemeColor(e.target.value)}
            />
          </div>
          <button onClick={() => handleActiveClock(title)}>Select</button>
        </div>
      </div>

      <div className='img_container'>
        <img src={placeholder} alt='preview of clock' />
      </div>
    </StyledCard>
  );
}

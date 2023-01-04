import React, { useState, memo } from 'react';
import styled from 'styled-components/macro';
import placeholder from '../assets/DigitalClock.jpg';

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

function Card({
  title,
  desc,
  handleActiveClock,
  backgroundColor,
  handlePrimaryColor,
}) {
  const [themeColor, setThemeColor] = useState(backgroundColor);

  function handleColorChange(e) {
    setThemeColor(e.target.value);
    handlePrimaryColor((prev) => {
      return { ...prev, [title]: e.target.value };
    });
  }

  return (
    <StyledCard color={backgroundColor}>
      <div className='img_container'>
        <img src={placeholder} alt='preview of clock' />
      </div>
      <div className='info_container'>
        <h3>{title} Clock</h3>
        <p>{desc}</p>
        <div className='input_buttons'>
          <div className='edit-color'>
            <label htmlFor='input-color'>Color</label>
            <input
              type='color'
              name='input-color'
              value={themeColor}
              onChange={handleColorChange}
            />
          </div>
          <button onClick={() => handleActiveClock(title)}>Select</button>
        </div>
      </div>
    </StyledCard>
  );
}

export default memo(Card);

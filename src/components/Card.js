import React, { useState, memo } from 'react';
import styled from 'styled-components/macro';
import placeholder from '../assets/DigitalClock.jpg';

const StyledCard1 = styled.div`
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

const StyledCard = styled.div`
  border-radius: 8px;
  border: 1px solid rgb(55, 58, 64);
  overflow: hidden;
  background-color: rgb(26, 27, 30);
  padding: 16px;
  max-width: 400px;

  .img_container {
    display: block;
    margin: -16px -16px 0;
    border-top: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }

  .info_container {
    margin: 16px -16px 0;
    border-bottom: 1px solid rgb(55, 58, 64);
    padding: 0 16px 16px;
  }

  a {
    color: white;
  }

  .btn_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    flex: 1 1 0%;
    padding: 0px 18px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: rgb(153, 20, 243);
    color: rgb(255, 255, 255);

    div {
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button:hover {
    background-color: rgb(168 85 247);
  }

  .edit-color {
    display: flex;
    flex-direction: column;
    text-align: center;
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
  imgSrc,
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
        <img src={imgSrc} alt='preview of clock' />
      </div>
      <div className='info_container'>
        <h3>{title} Clock</h3>
        <p>{desc}</p>
      </div>
      <div>
        <div className='btn_container'>
          <button onClick={() => handleActiveClock(title)}>
            <div>Select</div>
          </button>
          <div className='edit-color'>
            <label htmlFor='input-color'>Color</label>
            <input
              type='color'
              name='input-color'
              value={themeColor}
              onChange={handleColorChange}
            />
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default memo(Card);

{
  /* <StyledCard color={backgroundColor}>
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
</StyledCard> */
}

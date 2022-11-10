import React from 'react';
import styled from 'styled-components/macro';
import DigitalClockImg from '../assets/DigitalClock.jpg';

const StyledCard = styled.div`
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
export default function Card() {
  return (
    <StyledCard>
      <div className='card-info'>
        <h2>Digital Clock</h2>
        <p>Customize</p>
      </div>
      <div className='card-preview'>
        <img src={DigitalClockImg} alt='clock' />
        <button>Select</button>
      </div>
    </StyledCard>
  );
}

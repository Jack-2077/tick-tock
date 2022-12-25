import React, { memo } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledAnalogClock } from '../styles/AnalogClockStyles';

const StyledClockHand = styled.div`
  transform: rotate(${(props) => props.angle}deg);
`;

const ClockHand = ({ time, type, angle }) => {
  const angleToRotate = time * angle;
  return <StyledClockHand className={type + '_hand'} angle={angleToRotate} />;
};

export default function AnalogClock({ primaryColor }) {
  const [time, setTime] = useState(() => new Date());
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledAnalogClock>
      <div className='clock'>
        <ClockHand time={hour} angle={30} type='hour' />
        <ClockHand time={min} angle={6} type='min' />
        <ClockHand time={sec} angle={6} type='sec' />
        <span className='twelve'>12</span>
        <span className='one'>1</span>
        <span className='two'>2</span>
        <span className='three'>3</span>
        <span className='four'>4</span>
        <span className='five'>5</span>
        <span className='six'>6</span>
        <span className='seven'>7</span>
        <span className='eight'>8</span>
        <span className='nine'>9</span>
        <span className='ten'>10</span>
        <span className='eleven'>11</span>
      </div>
    </StyledAnalogClock>
  );
}

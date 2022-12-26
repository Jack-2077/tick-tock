import React, { memo } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledAnalogClock } from '../styles/AnalogClockStyles';

const StyledClockHand = styled.div`
  transform: rotateZ(${(props) => props.angle}deg);
`;

const MemoizedClockHand = memo(({ time, type, angleToRotate }) => {
  return (
    <StyledClockHand className={type + '_hand'} angle={time * angleToRotate} />
  );
});

export default function AnalogClock({ primaryColor }) {
  const [time, setTime] = useState(() => new Date('Dec 25 2022 10:10:35'));

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <StyledAnalogClock color={primaryColor}>
      <div className='clock'>
        <MemoizedClockHand
          time={time.getHours()}
          angleToRotate={30}
          type='hour'
        />
        <MemoizedClockHand
          time={time.getMinutes()}
          angleToRotate={6}
          type='min'
        />
        <MemoizedClockHand
          time={time.getSeconds()}
          angleToRotate={6}
          type='sec'
        />
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

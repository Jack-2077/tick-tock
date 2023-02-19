import React, { memo } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledAnalogClock } from '../styles/AnalogClockStyles';

const StyledClockHand = styled.div`
  transform: rotateZ(${(props) => props.angle}deg);
`;
const StyledMinuteBlock = styled.span`
  transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg);
`;

const MemoizedClockHand = memo(({ time, type, angleToRotate }) => {
  return (
    <StyledClockHand className={type + '-hand'} angle={time * angleToRotate} />
  );
});

const MinuteSpan = ({ angle }) => {
  const arr = [];
  for (let i = angle, j = 0; j < 4; j++, i += 6) {
    arr.push(i);
  }

  const isHalfway = [90, 180].includes(angle + 24);
  return (
    <>
      {arr.map((angleToBend) => (
        <StyledMinuteBlock key={angleToBend} angle={angleToBend} />
      ))}
      {!isHalfway && (
        <StyledMinuteBlock className='hour-block' angle={angle + 24} />
      )}
    </>
  );
};

export default function AnalogClock({ primaryColor }) {
  console.log(primaryColor);
  const [time, setTime] = useState(() => new Date('Dec 25 2022 10:10:35'));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledAnalogClock color={primaryColor}>
      <div className='circle' />
      <MemoizedClockHand
        time={time.getHours()}
        angleToRotate={30}
        type='hour'
      />
      <MemoizedClockHand
        time={time.getMinutes()}
        angleToRotate={6}
        type='minute'
      />
      <MemoizedClockHand
        time={time.getSeconds()}
        angleToRotate={6}
        type='second'
      />
      <ul>
        <li className='twelve'>
          <div>12</div>
        </li>
        <li className='three'>
          <div>3</div>
        </li>
        <li className='six'>
          <div>6</div>
        </li>
        <li className='nine'>
          <div>9</div>
        </li>
      </ul>
      <MinuteSpan angle={6} />
      <MinuteSpan angle={36} />
      <MinuteSpan angle={66} />
      <MinuteSpan angle={96} />
      <MinuteSpan angle={126} />
      <MinuteSpan angle={156} />
    </StyledAnalogClock>
  );
}

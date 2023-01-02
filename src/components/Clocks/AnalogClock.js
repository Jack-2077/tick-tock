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

//get the angle
//add 6 to it - 5 times
//map it to a span

const MinuteSpan = ({ angle }) => {
  const arr = [];
  for (let i = angle, j = 0; j < 5; j++, i += 6) {
    arr.push(i);
  }

  return (
    <>
      {arr.map((angleToBend) => (
        <span
          className='minutes'
          key={angleToBend}
          style={{
            transform: `translate(-50%, -50%) rotate(${angleToBend}deg)`,
          }}
        />
      ))}
    </>
  );
};

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
        <MinuteSpan angle={6} />
        <span className='one' />
        <MinuteSpan angle={36} />
        <span className='two' />
        <MinuteSpan angle={66} />
        <span className='three'>3</span>
        <MinuteSpan angle={96} />
        <span className='four' />
        <MinuteSpan angle={126} />
        <span className='five' />
        <MinuteSpan angle={156} />
        <span className='six'>6</span>
        <MinuteSpan angle={186} />
        <span className='seven' />
        <MinuteSpan angle={216} />
        <span className='eight' />
        <MinuteSpan angle={246} />
        <span className='nine'>9</span>
        <MinuteSpan angle={276} />
        <span className='ten' />
        <MinuteSpan angle={306} />
        <span className='eleven' />
        <MinuteSpan angle={336} />
      </div>
    </StyledAnalogClock>
  );
}

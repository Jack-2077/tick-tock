import React, { memo, useEffect, useState } from 'react';
import {
  StyledFlipClockWrapper,
  StyledFlipClockContainer,
} from '../styles/FlipClockStyles';

let inputColor;
const MemoizedDigit = memo(({ digit, maxValue }) => {
  let shadowDigit = digit - 1;

  if (digit <= 9) {
    shadowDigit = digit === 0 ? maxValue : '0' + shadowDigit;
    digit = '0' + digit;
  }

  if (digit === 10) {
    shadowDigit = '0' + shadowDigit;
  }

  return (
    <StyledFlipClockWrapper key={digit} color={inputColor}>
      <ul className='flip play'>
        <li className='flip-clock-before'>
          <a href='#root'>
            <div className='up'>
              <div className='shadow' />
              <div className='inn'>{shadowDigit}</div>
            </div>
            <div className='down'>
              <div className='shadow' />
              <div className='inn'>{shadowDigit}</div>
            </div>
          </a>
        </li>
        <li className='flip-clock-active'>
          <a href='#root'>
            <div className='up'>
              <div className='shadow' />
              <div className='inn'>{digit}</div>
            </div>
            <div className='down'>
              <div className='shadow' />
              <div className='inn'>{digit}</div>
            </div>
          </a>
        </li>
      </ul>
    </StyledFlipClockWrapper>
  );
});

export default function FlipClock({ primaryColor }) {
  inputColor = primaryColor;
  const [time, setTime] = useState(() => new Date());
  // const time = new Date('December 25, 1995 12:35:10');

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <StyledFlipClockContainer>
      <MemoizedDigit digit={hours} maxValue={23} />
      <MemoizedDigit digit={minutes} maxValue={59} />
      <MemoizedDigit digit={seconds} maxValue={59} />
    </StyledFlipClockContainer>
  );
}

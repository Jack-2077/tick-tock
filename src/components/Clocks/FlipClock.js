import React, { memo, useEffect, useState } from 'react';
import { StyledContainer } from './FlipClockStyles';

const MemoizedDigit = memo(({ digit, maxValue }) => {
  let shadowDigit = digit - 1;

  if (digit <= 9) {
    shadowDigit = digit === 0 ? maxValue : '0' + shadowDigit;

    digit = '0' + digit;
  }

  return (
    <StyledContainer key={digit}>
      <div className='clock flip-clock-wrapper' style={{ margin: '2em' }}>
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
      </div>
    </StyledContainer>
  );
});

export default function FlipClock({ primaryColor }) {
  const [time, setTime] = useState(() => new Date());

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
    <div
      style={{
        color: primaryColor,
        fontSize: '5vh',
        marginLeft: '10vw',
        display: 'flex',
      }}
    >
      <MemoizedDigit digit={hours} />
      <br />
      <MemoizedDigit digit={minutes} />
      <br />
      <MemoizedDigit digit={seconds} />
    </div>
  );
}

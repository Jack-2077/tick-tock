import React, { memo, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { StyledContainer } from './FlipClockStyles';

const bounce = keyframes`
0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Test = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: black;
  animation: ${bounce} 0.4s;
`;

const MemoizedDigit = memo(({ digit }) => {
  return <Test key={digit}>{digit}</Test>;
});

export function FlipClock({ primaryColor }) {
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
        fontSize: '15vh',
        marginLeft: '50vw',
        marginTop: '150px',
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

export default function NewTest({ primaryColor }) {
  const [time, setTime] = useState(() => new Date());

  console.log(time);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const seconds = time.getSeconds();

  // let shadowSecond = seconds !== 59 ? seconds + 1 : '00';

  // if (seconds <= 9) {
  //   shadowSecond = seconds === 9 ? 10 : '0' + (seconds + 1);
  //   seconds = '0' + seconds;
  // }

  return (
    <>
      <Best digit={hours} type='h' />
      <Best digit={minutes} type='m' />
      <Best digit={seconds} type='s' />
      {/* <ul className='flip  play'>
          <li className='flip-clock-before'>
            <a href='#root'>
              <div className='up'>
                <div className='shadow' />
                <div className='inn'>1</div>
              </div>
              <div className='down'>
                <div className='shadow' />
                <div className='inn'>1</div>
              </div>
            </a>
          </li>
          <li className='flip-clock-active'>
            <a href='#root'>
              <div className='up'>
                <div className='shadow' />
                <div className='inn'>0</div>
              </div>
              <div className='down'>
                <div className='shadow' />
                <div className='inn'>0</div>
              </div>
            </a>
          </li>
        </ul> */}
    </>
  );
}

const Best = ({ digit, type }) => {
  let shadowDigit = digit - 1;

  // shadowDigit = digit !== 59 ? digit - 1 : '00';

  // if (digit <= 9) {
  //   shadowDigit = digit === 9 ? 10 : '0' + (digit + 1);
  //   digit = '0' + digit;
  // }

  return (
    <StyledContainer key={digit}>
      <div className='clock flip-clock-wrapper' style={{ margin: '2em' }}>
        <ul className='flip play'>
          <li className='flip-clock-before'>
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
          <li className='flip-clock-active'>
            <a href='#root'>
              <div className='up'>
                <div className='shadow' />
                <div className='inn'>{shadowDigit + 1}</div>
              </div>
              <div className='down'>
                <div className='shadow' />
                <div className='inn'>{shadowDigit + 1}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </StyledContainer>
  );
};

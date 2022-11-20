import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

const StyledDigitalClock = styled.div`
  /* color: ${(props) => props.themeColor}; */
  color: #fb4264;
  text-shadow: 0 0 3vw #f40a35;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: max(20vw, 30px);
`;
export default function DigitalClock({ themeColor }) {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledDigitalClock themeColor={themeColor}>
      {dateState.toLocaleTimeString('it-IT')}
    </StyledDigitalClock>
  );
}

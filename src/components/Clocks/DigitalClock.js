import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

const StyledDigitalClock = styled.div`
  color: ${(props) => props.color};
  text-shadow: 0 0 3vw #f40a35;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: max(20vw, 30px);
`;

export default function DigitalClock({ primaryColor }) {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledDigitalClock color={primaryColor}>
      {time.toLocaleTimeString('it-IT')}
    </StyledDigitalClock>
  );
}

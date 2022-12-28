import { useState, useEffect } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { AnalogClock, FlipClock, DigitalClock } from '../components/Clocks';
import GlobalStyles from './GlobalStyles';
import Buttons from '../components/Buttons';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
`;

const StyledCard = styled.div`
  background-color: rgb(23, 177, 141);
  width: 20vw;

  button {
    margin: 1em 0;
    width: 100%;
  }
`;

function App() {
  const [color, setColor] = useState('#045975');
  const [showClock, setShowClock] = useState(false);
  const [active, setActive] = useState('');

  return (
    <>
      <GlobalStyles />
      {!active ? (
        <StyledContainer>
          <Card
            title='Digital'
            handleActiveClock={setActive}
            primaryColor='#A7B4F3'
          />
          <Card
            title='Flip'
            handleActiveClock={setActive}
            primaryColor='#AB61EF'
          />
          <Card
            title='Analog'
            handleActiveClock={setActive}
            primaryColor='#A6DCCB'
          />
        </StyledContainer>
      ) : (
        <Buttons />
      )}

      {active === 'Flip' && <FlipClock primaryColor={color} />}
      {active === 'Analog' && <AnalogClock primaryColor={color} />}
      {active === 'Digital' && <DigitalClock primaryColor={color} />}
    </>
  );
}

export default App;

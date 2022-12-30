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

function App() {
  const [color, setColor] = useState({
    Digital: '#A7B4F3',
    Flip: '#AB61EF',
    Analog: '#A6DCCB',
  });
  const [active, setActive] = useState('');

  return (
    <>
      <GlobalStyles />
      {!active && (
        <StyledContainer>
          <Card
            title='Digital'
            handleActiveClock={setActive}
            handlePrimaryColor={setColor}
            primaryColor='#A7B4F3'
          />
          <Card
            title='Flip'
            handleActiveClock={setActive}
            handlePrimaryColor={setColor}
            primaryColor='#AB61EF'
          />
          <Card
            title='Analog'
            handleActiveClock={setActive}
            handlePrimaryColor={setColor}
            primaryColor='#A6DCCB'
          />
        </StyledContainer>
      )}
      {active && <Buttons handleActiveClock={setActive} />}

      {active === 'Flip' && <FlipClock primaryColor={color.Flip} />}
      {active === 'Analog' && <AnalogClock primaryColor={color.Analog} />}
      {active === 'Digital' && <DigitalClock primaryColor={color.Digital} />}
    </>
  );
}

export default App;

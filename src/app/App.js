import { useState, useEffect } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { AnalogClock, FlipClock, DigitalClock } from '../components/Clocks';
import GlobalStyles from './GlobalStyles';
import Buttons from '../components/Buttons';
import { CLOCKS_DESC } from './data-svc';

const StyledContainer = styled.div`
  h1 {
    text-align: center;
  }
  .card-container {
    display: flex;
    gap: 2em;
    justify-content: center;
  }
`;

function App() {
  const [color, setColor] = useState({
    Digital: '#A7B4F3',
    Flip: '#AB61EF',
    Analog: '#AB61EF',
  });
  const [active, setActive] = useState('');

  return (
    <>
      <GlobalStyles />

      {!active && (
        <StyledContainer>
          <h1>Tick Tock</h1>
          <div className='card-container'>
            {CLOCKS_DESC.map(({ title, color, desc }) => (
              <Card
                key={title}
                title={title}
                backgroundColor={color}
                desc={desc}
                handleActiveClock={setActive}
                handlePrimaryColor={setColor}
              />
            ))}
          </div>
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

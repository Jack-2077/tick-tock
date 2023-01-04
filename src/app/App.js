import { useState, useEffect } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { AnalogClock, FlipClock, DigitalClock } from '../components/Clocks';
import GlobalStyles from './GlobalStyles';
import Buttons from '../components/Buttons';

const StyledContainer = styled.div`
  h1 {
    text-align: center;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
    justify-content: center;
  }
`;

const CLOCKS = [
  {
    title: 'Flip',
    color: '#AB61EF',
    desc: 'Coolest clock in town. It may or may not be inspired from this codepen',
  },
  {
    title: 'Digital',
    color: '#A7B4F3',
    desc: "My go-to clock. Inspired from Apple iMac's screensaver",
  },
  {
    title: 'Analog',
    color: '#AB61EF',
    desc: 'A stopwatch style clock inspired from my OnePlus clock app',
  },
];
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
            {CLOCKS.map(({ title, color, desc }) => (
              <Card
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

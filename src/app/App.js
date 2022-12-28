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

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setShowClock(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setShowClock(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      {/* <FlipClock primaryColor='red' /> */}
      <Buttons />
      {/* <StyledContainer>
        <Card
          title='Digital'
          handleActiveClock={setActive}
          primaryColor='#A7B4F3'
        >
          <FlipClock />
        </Card>
        <Card title='Flip' handleActiveClock={setActive} primaryColor='#AB61EF'>
          <AnalogClock />
        </Card>

        <Card
          title='Analog'
          handleActiveClock={setActive}
          primaryColor='#A6DCCB'
        >
          <DigitalClock />
        </Card>
      </StyledContainer> */}
      {active === 'clock-1' && <FlipClock primaryColor={color} />}
      {active === 'clock-2' && <AnalogClock primaryColor={color} />}
      {active === 'clock-3' && <DigitalClock primaryColor={color} />}
      {/* <button onClick={toggleFullScreen}>FULLSCREEN</button>

      {!showClock ? (
        <>
          <br />
          <br />
          <input
            type='color'
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </>
      ) : (
        <DigitalClock themeColor={themeColor} />
      )} */}
    </>
  );
}

export default App;

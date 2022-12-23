import { useState, useEffect } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { AnalogClock, FlipClock, DigitalClock } from '../components/Clocks';
import GlobalStyles from './GlobalStyles';

const StyledContainer = styled.div`
  display: flex;
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
      <FlipClock primaryColor='red' />
      {/* <h1>Tick Tock</h1>
      <h2>Select your clock</h2>
      <StyledContainer>
        <Card clock={'clock-1'} handleActiveClock={setActive}>
          <FlipClock />
        </Card>
        <Card clock={'clock-2'} handleActiveClock={setActive}>
          <AnalogClock />
        </Card>

        <Card clock={'clock-3'} handleActiveClock={setActive}>
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

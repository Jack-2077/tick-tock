import { useState } from 'react';
import Card from '../components/Card';
import DigitalClock from '../components/DigitalClock';
import GlobalStyles from './GlobalStyles';

function App() {
  const [themeColor, setThemeColor] = useState('#045975');
  const [showClock, setShowClock] = useState(false);

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
      <h1>Tick Tock</h1>
      <h2>Select your clock</h2>
      <Card />
      <div>
        <button onClick={toggleFullScreen}>FULLSCREEN</button>
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
        )}
      </div>
    </>
  );
}

export default App;

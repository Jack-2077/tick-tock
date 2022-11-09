import { useState } from 'react';
import Clock from '../components/Clock';
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
          <Clock themeColor={themeColor} />
        )}
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Clock from '../components/Clock';
import GlobalStyles from './GlobalStyles';

function App() {
  const [dateState, setDateState] = useState(new Date());
  const [themeColor, setThemeColor] = useState('#045975');

  // useEffect(() => {
  //   setInterval(() => setDateState(new Date()), 1000);
  // }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <button onClick={toggleFullScreen}>FULLSCREEN</button>
        <br />
        <br />
        <input
          type='color'
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
        />

        <Clock currentTime={dateState} themeColor={themeColor} />
      </div>
    </>
  );
}

export default App;

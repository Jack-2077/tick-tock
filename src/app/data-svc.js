import DigitalClockImg from '../assets/DigitalClock.jpg';
import FlipClockImg from '../assets/FlipClock.jpg';
import AnalogClockImg from '../assets/AnalogClock.jpg';

export const CLOCKS_DESC = [
  {
    title: 'Flip',
    img: FlipClockImg,
    color: '#AB61EF',
    desc: (
      <span
        dangerouslySetInnerHTML={{
          __html:
            "Coolest clock in town. I may or may not be inspired from <a href='https://codepen.io/nirlodsn/pen/yLWLpp' target='_blank' rel='noopener'>this</a> codepen",
        }}
      />
    ),
  },
  {
    title: 'Digital',
    img: DigitalClockImg,
    color: '#A7B4F3',
    desc: "My go-to clock. Inspired from Apple iMac's screensaver",
  },
  {
    title: 'Analog',
    img: AnalogClockImg,
    color: '#D78306',
    desc: 'A stopwatch style clock inspired from my OnePlus clock app',
  },
];

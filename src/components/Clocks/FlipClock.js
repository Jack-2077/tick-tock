import React, { memo, useEffect, useState } from 'react';

const MemoizedTime = memo(({ time }) => {
  return <div>{time}</div>;
});

export default function FlipClock({ primaryColor }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div style={{ color: primaryColor, fontSize: '20vh' }}>
      <MemoizedTime time={hours} />
      <MemoizedTime time={minutes} />
      <MemoizedTime time={seconds} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function Clock({ themeColor }) {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div>
      <p style={{ color: themeColor, paddingLeft: '400px' }}>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        })}
      </p>
    </div>
  );
}

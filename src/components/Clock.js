import React, { useState } from 'react';

export default function Clock({ currentTime, themeColor }) {
  console.log('x');
  return (
    <div>
      <p style={{ color: themeColor, paddingLeft: '400px' }}>
        {currentTime.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        })}
      </p>
    </div>
  );
}

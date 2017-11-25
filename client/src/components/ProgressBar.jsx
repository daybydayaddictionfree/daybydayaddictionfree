import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ progress }) => (
  <div>
    <div>
      {progress > 0 ? `Congrats on not smoking for ${progress} days` : 'Your smoke free life begins now!'}
    </div>
    <LinearProgress
      style={{ width: '66%', margin: '5px auto' }}
      mode="determinate"
      max={60}
      value={progress}
    />
  </div>
);

export default ProgressBar;

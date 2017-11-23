import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ progress }) => (
  <LinearProgress
    style={{ width: '66%', margin: '5px auto' }}
    mode="determinate"
    max={60}
    value={progress}
  />);

export default ProgressBar;

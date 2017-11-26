import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ progress }) => (
  <div>
    <div>
      {progress > 0 ?
      <p className="progress-comment">Congrats on not smoking for {progress} days! </p> : <p className="progress-comment">Your smoke free life begins now!</p>}
    </div>
    <div className="progress-container">
      <div className="axis">0</div>
      <LinearProgress
        style={{ width: '66%', margin: '5px auto' }}
        mode="determinate"
        max={60}
        value={progress}
      />
      <div className="axis">60</div>
    </div>
  </div>
);

export default ProgressBar;

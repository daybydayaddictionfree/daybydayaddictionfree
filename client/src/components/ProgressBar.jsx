import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ progress }) => (
  <div>
    <div>
      {progress > 0 ?
        <p className="progress-comment">Congrats! You haven't smoked in {progress} days! </p> :
        <p className="progress-comment">Your smoke free life begins now!</p>}
    </div>
    <div className="progress-container">
      <div className="axis">0</div>
      <LinearProgress
        style={{ width: '50%', margin: '30px 5px', height: '10px' }}
        mode="determinate"
        max={60}
        value={progress}
      />
      <div className="axis">60</div>
    </div>
  </div>
);

export default ProgressBar;

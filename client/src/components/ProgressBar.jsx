import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = (props) => (
  <LinearProgress
    style={{ width: '66%', margin: '5px auto' }}
    mode="determinate"
    max={60}
    value={this.props.progress}
  />);

export default ProgressBar;

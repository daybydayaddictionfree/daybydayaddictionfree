import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends React.component {
  constructor(props) {
    super(props);

    this.state = {
      /* this number will update from the database everytime a
      smoker has a successful or unsuccessful day */
      completed: 0,
    };
  }

  progress(value) {
    this.setState({ completed: value });
  }

  render() {
    return (
      <LinearProgress mode="determinate" value={this.state.completed} />
    );
  }
}

export default ProgressBar;

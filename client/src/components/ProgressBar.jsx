import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* this number will update from the database everytime a
      smoker has a successful or unsuccessful day */
      completed: 30,
    };
  }

  // call this or a similar function when database is updated
  progress(value) {
    this.setState({ completed: value });
  }

  render() {
    return (
      <LinearProgress style={{ width: '66%', margin: '5px auto' }} mode="determinate" max={60} value={this.state.completed} />
    );
  }
}

export default ProgressBar;

import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /* this number will update from the database everytime a
      smoker has a successful or unsuccessful day */
      completed: 0,
    };
  }

  // call this or a similar function when database is updated
  componetDidMount() {
    this.setState({ completed: this.props.progress });
  }

  render() {
    return (
      <LinearProgress style={{ width: '66%', margin: '5px auto' }} mode="determinate" max={60} value={this.state.completed} />
    );
  }
}

export default ProgressBar;

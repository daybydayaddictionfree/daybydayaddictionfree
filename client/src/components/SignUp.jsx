import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNum: undefined,
      Friend1: undefined,
      Friend2: undefined,
      Friend3: undefined,
      Friend1Num: undefined,
      Friend2Num: undefined,
      Friend3Num: undefined,
    };
    this.userNum = this.userNum.bind(this);
    this.Friend1 = this.Friend1.bind(this);
    this.Friend2 = this.Friend2.bind(this);
    this.Friend3 = this.Friend3.bind(this);
    this.Friend1Num = this.Friend1Num.bind(this);
    this.Friend2Num = this.Friend2Num.bind(this);
    this.Friend3Num = this.Friend3Num.bind(this);
  }

  userNum(e) {
    this.setState({ userNum: e.target.value });
  }
  Friend1(e) {
    this.setState({ Friend1: e.target.value });
  }
  Friend2(e) {
    this.setState({ Friend2: e.target.value });
  }
  Friend3(e) {
    this.setState({ Friend3: e.target.value });
  }
  Friend1Num(e) {
    this.setState({ Friend1Num: e.target.value });
  }
  Friend2Num(e) {
    this.setState({ Friend2Num: e.target.value });
  }
  Friend3Num(e) {
    this.setState({ Friend3Num: e.target.value });
  }
  render() {
    return (
      <div className="sign-up-container">
        <Paper 
          zDepth={2}
        >
        <div className="input-container">
          <h2 className="sign-up-title">Sign up </h2>
          <h4
            style={{ margin: '0 0 -20px 10px' }}
          >
            Your Phone Number:
          </h4><br />
          <TextField
            hintText="+1xxxxxxxxxx"
            onChange={this.userNum}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <h4
            style={{ margin: '20px 0 -40px 10px' }}
          >
            Friend number one:
          </h4><br />
          <TextField
            hintText="Name"
            floatingLabelText="Name"
            onChange={this.Friend1}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <TextField
            hintText="Phone number"
            floatingLabelText="Phone number"
            onChange={this.Friend1Num}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <h4
            style={{ margin: '20px 0 -40px 10px' }}
          >
            Friend number two:
          </h4><br />
          <TextField
            hintText="Name"
            floatingLabelText="Name"
            onChange={this.Friend2}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <TextField
            hintText="Phone number"
            floatingLabelText="Phone number"
            onChange={this.Friend2Num}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <h4
            style={{ margin: '20px 0 -40px 10px' }}
          >
            Friend number three:
          </h4><br />
          <TextField
            hintText="Name"
            floatingLabelText="Name"
            onChange={this.Friend3}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <TextField
            hintText="Phone number"
            floatingLabelText="Phone number"
            onChange={this.Friend3Num}
            style={{ margin: '0 0 0 10px' }}
          /><br />
          <div className="btn-box">
            <FlatButton
              label="Create account"
              backgroundColor="#3CB371"
              className="signupbtn"
              style={{ margin: '0 0 10px 40px', color: 'white' }}
              disabled={!this.state.userNum || !this.state.Friend1 ||
              !this.state.Friend2 || !this.state.Friend3 || !this.state.Friend1Num ||
              !this.state.Friend2Num || !this.state.Friend3Num}
              onClick={() => { this.props.createUser(this.state); }}
            />
          </div>
        </div>
        </Paper>
      </div>
    );
  }
}

export default SignUp;

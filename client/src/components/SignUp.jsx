import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
        <div>
          <h2 className="sign-up-title">Sign up </h2>     
          <TextField
            hintText="Your Phone Number"
            onChange={this.userNum}
          /><br />
          <TextField
            hintText="Name"
            floatingLabelText="Friend #1 Name"
            onChange={this.Friend1}
          /><br />
          <TextField
            hintText="Phone Number"
            floatingLabelText="Friend #1 Phone number"
            onChange={this.Friend1Num}
          /><br />
          <TextField
            hintText="Name"
            floatingLabelText="Friend #2 Name"
            onChange={this.Friend2}
          /><br />
          <TextField
            hintText="Phone Number"
            floatingLabelText="Friend #2 Phone number"
            onChange={this.Friend2Num}
          /><br />
          <TextField
            hintText="Name"
            floatingLabelText="Friend #3 Name"
            onChange={this.Friend3}
          /><br />
          <TextField
            hintText="Phone Number"
            floatingLabelText="Friend #3 Phone number"
            onChange={this.Friend3Num}
          /><br />
          <div className="btn-box">
            <FlatButton
              label="Create account"
              backgroundColor="#3CB371"
              className="signupbtn"
              disabled={!this.state.userNum || !this.state.Friend1 ||
              !this.state.Friend2 || !this.state.Friend3 || !this.state.Friend1Num ||
              !this.state.Friend2Num || !this.state.Friend3Num}
              onClick={() => { this.props.createUser(this.state); }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

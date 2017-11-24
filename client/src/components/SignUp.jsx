import React from 'react';
import Style from 'react-style-tag';
import GoogleLogin from "react-google-login";
import GoogleId from "../../../keysAndIds/GoogleId";

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
      <div>
        <h2>Signup Form</h2>
        <div className="sign-container">
          <label><b>User number#</b></label>
          <input type="text" placeholder="Enter Number" onChange={this.userNum} />

          <label><b>Friend 1</b></label>
          <input type="text" placeholder="Enter Name" onChange={this.Friend1} />

          <label><b>Friend 1 number#</b></label>
          <input type="text" placeholder="Enter Number" onChange={this.Friend1Num} />

          <label><b>Friend 2</b></label>
          <input type="text" placeholder="Enter Name" onChange={this.Friend2} />

          <label><b>Friend 2 number#</b></label>
          <input type="text" placeholder="Enter Number" onChange={this.Friend2Num} />

          <label><b>Friend 3</b></label>
          <input type="text" placeholder="Enter Name" onChange={this.Friend3} />

          <label><b>Friend 3 number#</b></label>
          <input type="text" placeholder="Enter Number" onChange={this.Friend3Num} />

          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button
              type="submit"
              className="signupbtn"
              disabled={!this.state.userNum || !this.state.Friend1 || !this.state.Friend2 ||
                !this.state.Friend3 || !this.state.Friend1Num || !this.state.Friend2Num || !this.state.Friend3Num}
              onClick={() => {
                this.props.createUser(this.state);
              }}
            >Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

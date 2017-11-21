import React from 'react';
import Style from 'react-style-tag';

const SignUp = () =>
  (
    <div>
        <Style>{`
            /* Full-width input fields */
            input[type=text], input[type=password] {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                box-sizing: border-box;
            }

            /* Set a style for all buttons */
            button {
                background-color: #4CAF50;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                cursor: pointer;
                width: 100%;
            }

            /* Extra styles for the cancel button */
            .cancelbtn {
                padding: 14px 20px;
                background-color: #f44336;
            }

            /* Float cancel and signup buttons and add an equal width */
            .cancelbtn,.signupbtn {
                float: left;
                width: 50%;
            }

            /* Add padding to container elements */
            .container {
                padding: 16px;
            }

            /* Clear floats */
            .clearfix::after {
                content: "";
                clear: both;
                display: table;
            }

            /* Change styles for cancel button and signup button on extra small screens */
            @media screen and (max-width: 300px) {
                .cancelbtn, .signupbtn {
                    width: 100%;
                }
            }
        `}
        </Style>

        <h2>Signup Form</h2>


        <div className="container">
        <label><b>User number#</b></label>
        <input type="text" placeholder="Enter Email" />

        <label><b>Friend 1</b></label>
        <input type="password" placeholder="Enter Password" />

        <label><b>Friend 1 number#</b></label>
        <input type="password" placeholder="Repeat Password" />

        <label><b>Friend 2</b></label>
        <input type="password" placeholder="Enter Password" />

        <label><b>Friend 2 number#</b></label>
        <input type="password" placeholder="Repeat Password" />

        <label><b>Friend 3</b></label>
        <input type="password" placeholder="Enter Password" />

        <label><b>Friend 3 number#</b></label>
        <input type="password" placeholder="Repeat Password" />


        <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
        </div>
        </div>
  </div>
  );

export default SignUp;

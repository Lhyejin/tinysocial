import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GoogleLogin} from 'react-google-login';
import {clientID} from './utils.js';
import {gql} from 'apollo-boost';

/*query sending user Information to server*/
const SIGNIN_QUERY = gql`
        mutation ($googleId: String!){
<<<<<<< HEAD
          signInWithGoogle(googleId: $googleId){
            success
            message
            token
            user{
              firstName
              lastName
            }
=======
          signInWithGoogle(google: $googleId){
            success
            message
            token
            user
>>>>>>> 48cb5fcad3ea79f00b17243b5aeff1230d510c22
          }
        }`;

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isMember: false,
    };
  }

  // Google login success callback function
  responseGoogle = async (res) => {
    const userInfo = res.profileObj;

    // send userInfo data to server
    const {data} = await this.props.client.query({
      mutate: {SIGNIN_QUERY},
      variables: {
        googleId: userInfo.googleId,
      },
    });
<<<<<<< HEAD
=======

>>>>>>> 48cb5fcad3ea79f00b17243b5aeff1230d510c22
  };

  // Google login fail callback function
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
        <div>
          {/* Google Login Button */}
          <GoogleLogin
              onSuccess={this.responseGoogle}
              onFailure={this.responseFail}
              clientId={clientID} // our Client ID
          />
        </div>);
  }
}

LoginForm.propTypes = {};

export default LoginForm;

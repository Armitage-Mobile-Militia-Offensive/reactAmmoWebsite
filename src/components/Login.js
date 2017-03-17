import React, {Component} from 'react';
import {login, connectProfile, logout} from '../auth';

import './Login.css';
import ClockUTC from './ClockUTC';

class Login extends Component {
  // componentWillMount() {
  //   this.login = login();
  // }
  //
  // componentWillUnmount() {
  //   this.login.hide();
  //   this.login = null;
  // }

  render() {
    const {profile} = this.props;
    let renderinfo = () => {
      let date = new Date(profile.created_at);
      return (
        <span className="card-text">{date.toLocaleString()} | {date.toUTCString()}</span>
      );
    };

    if(!profile){
      return (
        <div className="container" style={{marginTop: '20%'}}>
          <h1 className="display-2 alert alert-danger text-center"><span className="fa fa-exclamation-triangle" aria-hidden="true"></span>  Restricted Access  <span className="fa fa-exclamation-triangle" aria-hidden="true"></span></h1>
          <div className="card text-center">
            <h2 className="card-header">
              <strong>Armitage Mobile Militia Offensive Usage Only</strong>
            </h2>
            <div className="card-block">
              <h4 className="card-title">Please follow directions bellow</h4>
              <p className="card-text">For authorized users, Welcome. <br/> Please follow the button to either sign-in to your profile or sign-up as a new member.</p>
              <button type="button" className="btn btn-primary" onClick={() => login()}>Log-in to <span style={{color: '#F59B45'}}><strong>A.M.M.O.</strong></span></button>
            </div>
            <div className="card-footer text-muted">
              <ClockUTC/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container" style={{marginTop: '20%'}}>
          <h1 className="display-2 alert alert-info text-center">Welcome {profile.username} </h1>
          <div className="text-center">
            <img className="img-fluid" alt="User Avatar" src={profile.picture}/>
          </div>
          <div className="card text-center">
            <h2 className="card-header">
              <strong>Armitage Mobile Militia Offensive Usage Only</strong>
            </h2>
            <div className="card-block">
              <h4 className="card-title">Please follow directions bellow</h4>
              <p className="card-text">Member since:{renderinfo()}</p>
              <button type="button" className="btn btn-primary" onClick={() => logout()}>Log out of <span style={{color: '#F59B45'}}><strong>A.M.M.O.</strong></span></button>
            </div>
            <div className="card-footer text-muted">
              <ClockUTC/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connectProfile(Login);

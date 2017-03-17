import React, {Component} from 'react';
import {connectProfile} from '../auth';
import './Home.css';

import ClockUTC from './ClockUTC';


class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {
    return (
      <div className="row container-fluid" id="homeLanding">
        <div className="col-sm-8 offset-sm-2 field">
          <span className="landing">
            <h3 className="landingHeader display-4 text-center" style={{ fontFamily: 'Electrolize', textAlign: 'center', marginTop: '25%', color: 'white'}}>Armitage Mobile Militia Offensive</h3>
            <h1 className="landingHeader display-3 text-center" style={{ fontFamily: 'Electrolize', textAlign: 'center', marginBottom: '0%', color: '#F59B45'}}><b> A . M . M . O . </b></h1>
            <p className="landingText text-center" style={{ fontFamily: 'Offside', textAlign: 'center'}}><small>ex oblivione, unitas</small></p>
            <ClockUTC/>
          </span>
        </div>
      </div>
    );
  }
}

export default connectProfile(Home);

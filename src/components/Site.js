import React, {Component, PropTypes} from 'react';
import {connectProfile, logout} from '../auth';
import './Site.css';
import Nav from './Nav';

class Site extends Component {
    static propTypes = {
        ...connectProfile.PropTypes,
        children: PropTypes.any
    };

    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

export default connectProfile(Site);

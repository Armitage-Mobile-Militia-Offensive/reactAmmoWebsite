import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connectProfile, logout, login} from '../auth';
// import ClockUTC from './ClockUTC'

const activeNavItem = {
    color: '#F59B45',
    borderBottom: '4px solid #F59B45'
};

const hoveredItem = {
    fontSize: '115%',
    color: 'white',
    textDecoration: 'none',
    borderBottom: '4px solid #F59B45'
};

const navItem = {
    fontSize: '115%',
    color: 'white',
    textDecoration: 'none'
};

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            home: navItem,
            floatila: navItem,
            fleet: navItem,
            scheduler: navItem,
            about: navItem
        };
    };

    static propTypes = {
        ...connectProfile.PropTypes,
        children: PropTypes.any
    };

    onMouseEnter = (link) => {
        switch (link) {
            case "home":
                this.setState({home: hoveredItem});
                break;
            case "scheduler":
                this.setState({scheduler: hoveredItem});
                break;
            case "floatila":
                this.setState({floatila: hoveredItem});
                break;
            case "fleet":
                this.setState({fleet: hoveredItem});
                break;
            case "about":
                this.setState({about: hoveredItem});
                break;
            default:
                this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: navItem});
        }
    };
    onMouseLeave = (link) => {
        switch (link) {
            case "home":
                this.setState({home: navItem});
                break;
            case "scheduler":
                this.setState({scheduler: navItem});
                break;
            case "floatila":
                this.setState({floatila: navItem});
                break;
            case "fleet":
                this.setState({fleet: navItem});
                break;
            case "about":
                this.setState({about: navItem});
                break;
            default:
                this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: navItem});
        }
    };

    render() {

        let renderProfileDropdown = () => {
            let name = 'Guest';
            const {profile} = this.props;
            if (profile) {
                name = profile.username;
            }
            if (!profile) {
                return (
                    <span className="nav-item nav-right dropdown" style={{
                        fontSize: '115%',
                        color: 'white'
                    }} activeStyle={{
                        activeNavItem
                    }}>
                        <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" style={{
                            navItem
                        }} activeStyle={{
                            activeNavItem
                        }}>Welcome {name}</span>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <span className="dropdown-item" onClick={() => login()}>Login / Sign-up</span>
                        </div>
                    </span>
                );
            } else {
                return (
                    <span className="nav-item nav-right dropdown" style={{
                        fontSize: '115%',
                        color: 'white'
                    }} activeStyle={{
                        activeNavItem
                    }}>
                        <span className="nav-link dropdown-toggle nav-text" id="navbarDropdownMenuLink" data-toggle="dropdown" style={{
                            navItem
                        }} activeStyle={{
                            activeNavItem
                        }}>
                            Welcome {name}
                            <img src={profile.picture} alt="User Avatar" className="rounded" height="30px"/></span>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/profile/dashboard" className="dropdown-item" style={{
                                textDecoration: 'none'
                            }}>Dashboard</Link>
                            <span className="dropdown-item" onClick={() => logout()}>Logout</span>
                        </div>
                    </span>
                );
            }
        }

        return (
            <nav className="navbar navbar-toggleable-md fixed-top navbar-dark bg-inverse" style={{
                fontFamily: 'Electrolize',
                padding: '0px'
            }}>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars nav-text" aria-hidden="true" style={{
                        backgroundColor: 'white',
                        fontSize: '115%',
                        marginTop: '20%',
                        marginBottom: '20%'
                    }}></span>
                </button>
                <Link to="/"><img src="/assets/AMMO_LOGOv2.png" className="navbar-brand" alt="" style={{
                height: '40px'
            }}/></Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" activeClassName="active">
                            <Link to="/" className="nav-link" style={this.state.home} activeStyle={activeNavItem} onMouseEnter={() => this.onMouseEnter("home")} onMouseLeave={() => this.onMouseLeave("home")}>Home</Link>
                        </li>
                        <li className="nav-item" activeClassName="active">
                            <Link to="/schedule" className="nav-link" style={this.state.scheduler} activeStyle={activeNavItem} onMouseEnter={() => this.onMouseEnter("scheduler")} onMouseLeave={() => this.onMouseLeave("scheduler")}>Schedule</Link>
                        </li>
                        <li className="nav-item" activeClassName="active">
                            <Link to="/floatila" className="nav-link" style={this.state.floatila} activeStyle={activeNavItem} onMouseEnter={() => this.onMouseEnter("floatila")} onMouseLeave={() => this.onMouseLeave("floatila")}>Floatila</Link>
                        </li>
                        <li className="nav-item" activeClassName="active">
                            <Link to="/fleet" className="nav-link" style={this.state.fleet} activeStyle={activeNavItem} onMouseEnter={() => this.onMouseEnter("fleet")} onMouseLeave={() => this.onMouseLeave("fleet")}>Fleet</Link>
                        </li>
                    </ul>
                    {renderProfileDropdown()}
                </div>
            </nav>
        );
    }
}

export default connectProfile(Nav);

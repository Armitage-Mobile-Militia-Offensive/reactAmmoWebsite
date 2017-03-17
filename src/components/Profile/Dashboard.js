import React, {Component} from 'react';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid" style={{paddingTop: '50px'}}>
        <div className="row">
          <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Export</a>
              </li>
            </ul>
          <h5>Account</h5>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Edit Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Change Password</a>
              </li>
            </ul>
          <h5>AMMO</h5>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">File <abbr title="Leave of Absence" style={{textDecoration: 'none'}}>L.O.A.</abbr></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Command</a>
              </li>
            </ul>
          </nav>

          <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
            <h1 className="text-center">Dashboard</h1>

            <section className="row text-center placeholders align-bottom" style={{height: '175px'}}>
              <div className="h-100 w-25 d-inline col-6 col-md-3 placeholder">
                <img src="/assets/ShipModels/Vanguard.svg" className="rounded" alt="Generic placeholder thumbnail" height="35%" width="100%" style={{objectFit: 'contain'}}/>
                <h4>ABGV38677</h4>
                <div className="text-muted">Vanguard Harbinger <em>Purchased on 14/12/2945</em></div>
              </div>
              <div className="h-100 w-25 d-inline col-6 col-md-3 placeholder">
                <img src="/assets/ShipModels/Hornet.svg" className="rounded" alt="Generic placeholder thumbnail" height="35%" width="100%" style={{objectFit: 'contain'}}/>
                <h4>FAH45674</h4>
                <span className="text-muted">F7CM <em>Purchased on 14/12/2945</em></span>
              </div>
              <div className="h-100 w-25 d-inline col-6 col-md-3 placeholder">
                <img src="/assets/ShipModels/M50.svg" className=" rounded" alt="Generic placeholder thumbnail" height="35%" width="100%" style={{objectFit: 'contain'}}/>
                <h4>POM18674</h4>
                <span className="text-muted">Origin M50 <em>Purchased on 21/10/2945</em></span>
              </div>
              <div className="h-100 w-25 d-inline col-6 col-md-3 placeholder">
                <img src="/assets/ShipModels/Buccaneer.svg" className="rounded" alt="Generic placeholder thumbnail" height="35%" width="100%" style={{objectFit: 'contain'}}/>
                <h4>FDB69746</h4>
                <span className="text-muted">Buccaneer <em>Purchased on 01/08/2945</em></span>
              </div>
            </section>

            <h2>Section title</h2>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;

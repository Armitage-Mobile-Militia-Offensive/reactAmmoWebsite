import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {requireAuth} from '../auth';
import Site from './Site';
import Home from './Home';
import Login from './Login';
import EditProfile from './EditProfile';
import Dashboard from './Profile/Dashboard';
import Fleet from './Fleet/Fleet';
import Floatila from './Floatila/Floatila';
import Scheduler from './Scheduler/Scheduler';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Site}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/schedule" component={Scheduler}/>
          <Route path="/floatila" component={Floatila}/>
          <Route path="/fleet" component={Fleet}/>
          <Route >
            <Route path="/profile/dashboard" component={Dashboard}/>
            <Route path="/profile/edit" component={EditProfile} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;

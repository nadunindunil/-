import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import Navbar from './common/Navbar';
import NotificationPage from './notifications/notificationPage';

class mainApp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notifications" component={NotificationPage} />
        </Switch>
      </div>
    );
  }
}

export default mainApp;

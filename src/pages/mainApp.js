import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './home/HomePage';
import Navbar from './common/Navbar';
import NotificationPage from './notifications/notificationPage';
import { Layout, Breadcrumb } from 'antd';

const { Content, Footer } = Layout;

class mainApp extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <div style={{ background: '#fff', padding: 24, minHeight: '90vh' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/notifications" component={NotificationPage} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Katapath Pavura ©2018 Created by Open-SL</Footer>
      </Layout>
    );
  }
}

export default mainApp;

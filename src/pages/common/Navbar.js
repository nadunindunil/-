import React, { Component } from 'react';
import { Layout, Icon, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Header } = Layout;

class Navbar extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const { location } = this.props;
    return (
      <Header style={{ width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          selectedKeys={[location.pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <NavLink to="/">
              <Icon type="home" />
              <span>Home</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/other">
            <Icon type="mobile" />
            <span>Applications</span>
          </Menu.Item>
          <Menu.Item key="/notifications">
            <NavLink to="/notifications">
              <Icon type="notification" />
              <span>Notifications</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(Navbar);

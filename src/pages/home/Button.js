import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from 'antd';

import * as HomeActions from './HomeActions';

class MyButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.clickTest = this.clickTest.bind(this);
  }

  clickTest() {
    let value = this.props.number + 1;
    this.props.actions.addValue(value);
  }

  render() {
    return (
      <div>
        <Button size="large" type="primary" onClick={this.clickTest}>
          change value
        </Button>
      </div>
    );
  }
}

Button.propTypes = {
  actions: PropTypes.object,
  number: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return { number: state.number };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyButton);

import React, { Component } from 'react';
import { connect } from 'react-redux';

// This Component is only for testing and presentation purposes
class PresentationCmpnt extends Component {
  render() {
    return <div>{this.props.num}</div>;
  }
}

function mapStateToProps(state) {
  return { num: state.number };
}

export default connect(mapStateToProps)(PresentationCmpnt);

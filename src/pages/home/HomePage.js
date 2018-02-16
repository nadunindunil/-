import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { Button } from 'antd';
import Thoughts from './Thoughts';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as HomeActions from './HomeActions';

const { TextArea } = Input;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    if (e.key === 'Enter') {
      this.setState({ input: this.state.input + '\n' });
    }
    this.setState({ input: e.target.value });
  }

  handleClick() {
    console.log(this.state.input);
    this.props.actions.postThought(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <TextArea
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="write your thoughts"
          autosize
        />
        <Button size="default" type="primary" onClick={this.handleClick}>
          Submit
        </Button>
        <Thoughts thoughts={this.props.thoughts} />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    thoughts: state.thoughtsView.thoughts,
    isFetching: state.thoughtsView.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

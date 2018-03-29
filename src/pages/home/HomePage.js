import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thoughts from './Thoughts';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as HomeActions from './HomeActions';

import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape
} from 'react-placeholder/lib/placeholders';

const awesomePlaceholder = (
  <div>
    <div className="my-3 p-3 bg-white rounded box-shadow">
      <TextBlock rows={4} color="#E0E0E0" />
    </div>

    <div className="my-3 p-3 bg-white rounded box-shadow">
      <TextBlock rows={4} color="#E0E0E0" />
    </div>

    <div className="my-3 p-3 bg-white rounded box-shadow">
      <TextBlock rows={4} color="#E0E0E0" />
    </div>
  </div>
);

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      isFetching: this.props.isFetching,
      isPosting: this.props.isPosting
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

  handleClick(event) {
    console.log(this.state.input);
    event.preventDefault();
    this.props.actions.postThought(this.state.input);
    this.setState({ input: '' });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      isFetching: nextProps.isFetching,
      isPosting: nextProps.isPosting
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <main role="main" className="container">
            <div className="align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
              <form>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={this.state.input}
                    onChange={this.handleChange}
                    placeholder="write your thoughts..."
                  />
                </div>
                <div className="form-group add-padding">
                  <button
                    type="submit"
                    className="btn btn-outline-light float-right"
                    loading={this.state.isPosting}
                    onClick={this.handleClick}
                  >
                    {this.state.isPosting ? 'sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>

            <ReactPlaceholder
              ready={!this.state.isFetching}
              customPlaceholder={awesomePlaceholder}
              showLoadingAnimation={true}
            >
              <Thoughts thoughts={this.props.thoughts} />
            </ReactPlaceholder>
          </main>
        </div>
        {/*<TextArea
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="write your thoughts"
          autosize
        />
        <Button size="default" type="primary" loading={this.state.isPosting} onClick={this.handleClick}>
          Submit
        </Button>
        { this.state.isFetching ? <Spin /> : <Thoughts thoughts={this.props.thoughts}/> }*/}
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
    isFetching: state.thoughtsView.isFetching.isFetching,
    isPosting: state.thoughtsView.isFetching.isPosting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

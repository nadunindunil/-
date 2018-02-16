import React, { Component } from 'react';
import ThoughtCard from './ThoughtCard';
import { connect } from 'react-redux';

class Thoughts extends Component {
  render() {
    return (
      <div>
        {this.props.thoughts.map((thought, id) => {
          return <ThoughtCard key={id} thought={thought.data} />;
        })}
      </div>
    );
  }
}

export default Thoughts;

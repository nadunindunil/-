import React, { Component } from 'react';

class ThoughtCard extends Component {
  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow">
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125">
            <strong className="d-block text-gray-dark" />
            {this.props.thought.split('\n').map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default ThoughtCard;

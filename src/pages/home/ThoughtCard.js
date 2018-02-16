import React, { Component } from 'react';
import { Card } from 'antd';

class ThoughtCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <p>
            {this.props.thought.split('\n').map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </p>
        </Card>
      </div>
    );
  }
}

export default ThoughtCard;

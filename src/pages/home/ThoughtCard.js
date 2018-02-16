import React, { Component } from 'react';
import { Card } from 'antd';

class ThoughtCard extends Component {
  render() {
    return (
      <div>

      <Card>
        <p>{this.props.thought}</p>
      </Card>
        
      </div>
    );
  }
}

export default ThoughtCard;
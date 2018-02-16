import React, { Component } from 'react';
import { Input } from 'antd';
import Button from './Button';

const { TextArea } = Input;


class HomePage extends Component {
  render() {
    return (
      <div>
      <TextArea placeholder="Autosize height based on content lines" autosize />
        <Button />
      </div>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';

export default class ProgressBar extends Component {
  render() {
    const { value, color } = this.props;
    return (
      <div
        style={{
          marginTop: '40px',
          width: value + '%',
          height: '20px',
          backgroundColor: color,
        }}
      />
    );
  }
}

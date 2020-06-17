import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeSalary(newText);
  };
  render() {
    const { salary } = this.props;
    return (
      <div>
        <input
          type="text"
          value={salary}
          onChange={this.handleInputChange}
          placeholder="Escreva aqui seu salário"
        />
      </div>
    );
  }
}

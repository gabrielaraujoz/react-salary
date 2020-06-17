import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import ProgressBar from './components/ProgressBar/ProgressBar';
import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: '1000',
    };
  }

  handleChangeSalary = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });
  };

  render() {
    const { fullSalary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);
    const INSSPercentage = (discountINSS / fullSalary) * 100;
    const IRPFPercentage = (discountIRPF / fullSalary) * 100;
    const netSalaryPercentage = (netSalary / fullSalary) * 100;
    return (
      <div className="container">
        <h1>React Salário</h1>
        <InputFullSalary
          salary={fullSalary}
          onChangeSalary={this.handleChangeSalary}
        />
        <InputReadOnly
          baseINSS={baseINSS}
          discountINSS={discountINSS}
          baseIRPF={baseIRPF}
          discountIRPF={discountIRPF}
          netSalary={netSalary}
          INSSPercentage={INSSPercentage}
          IRPFPercentage={IRPFPercentage}
          netSalaryPercentage={netSalaryPercentage}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ProgressBar value={INSSPercentage} color="#e67e22" />
          <ProgressBar value={IRPFPercentage} color=" #c0392b" />
          <ProgressBar value={netSalaryPercentage} color="#16a085" />
        </div>
      </div>
    );
  }
}

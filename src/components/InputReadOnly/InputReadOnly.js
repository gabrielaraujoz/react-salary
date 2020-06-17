import React, { Component } from 'react';
import { formatNumber } from '../../helpers/formatHelpers';
import css from './inputreadonly.module.css';

export default class InputReadOnly extends Component {
  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      netSalaryPercentage,
      INSSPercentage,
      IRPFPercentage,
    } = this.props;
    return (
      <div className={css.flexColumn}>
        <div className={css.flexRow}>
          <div className={css.border}>Base INSS: {formatNumber(baseINSS)}</div>
          <div className={css.border}>
            Desconto INSS: {formatNumber(discountINSS)} (
            {INSSPercentage.toFixed(2)}%)
          </div>
          <div className={css.border}>Base IRPF: {formatNumber(baseIRPF)}</div>
          <div className={css.border}>
            Desconto IRPF: {formatNumber(discountIRPF)} (
            {IRPFPercentage.toFixed(2)}%)
          </div>
        </div>
        <div className={css.borderSalary}>
          Salário Líquido: {formatNumber(netSalary)} (
          {netSalaryPercentage.toFixed(2)}%)
        </div>
      </div>
    );
  }
}

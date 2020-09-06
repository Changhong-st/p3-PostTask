import React from 'react';

import styles from '../../PostTask.module.scss';

import classNames from 'classnames/bind';
import ErrorHint from '../../../ErrorHint';

function BudgetInput({
  taskBudget,
  minBudget,
  maxBudget,
  onBudgetChange,
  name,
}) {

  const validateInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
  }

  const cx = classNames.bind(styles);
  const errorHint = "Please suggest a budget between $" + minBudget + " and $" + maxBudget + " for your task";

  return (
    <React.Fragment>
      <input 
        className={cx(
          {
            "Money": name === "wage",
            "Hour": name === "hour",
          }
        )}
        type="text"
        name={name}
        onChange={onBudgetChange}
        onInput={validateInput}
      />
      <input />
     
      {taskBudget < minBudget || taskBudget > maxBudget
        ?
        <ErrorHint>
          {errorHint}
        </ErrorHint>
        :
        null
      }
    </React.Fragment>
  )
}

export default BudgetInput;


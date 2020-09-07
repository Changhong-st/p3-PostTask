import React from 'react';

import styles from '../../PostTask.module.scss';

import classNames from 'classnames/bind';
import ErrorHint from '../../../ErrorHint';

function BudgetInput({
  taskBudget,
  minBudget,
  maxBudget,
  onBudgetHour,
  onBudgetHourlyWage,
  name,
  type,
  switchMode,
}) {

  const validateInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
  }
  console.log({switchMode});
  const cx = classNames.bind(styles);
  const errorHint = "Please suggest a budget between $" + minBudget + " and $" + maxBudget + " for your task";

  return (
    <div className={styles.budget_input}>
      <input 
        className={cx(
          {
            "Money": name === "wage",
          }
        )}
        type="text"
        name={name}
        onChange={onBudgetHourlyWage}
        onInput={validateInput}
      />{switchMode?<React.Fragment><div>/hr &times;</div>
      <input
        className={cx(
          {
            "Hour": type === "hour",
          }
        )}
        type="text"
        onChange={onBudgetHour}
        onInput={validateInput}
      /><div>/hrs</div> </React.Fragment>: null}
     
      {taskBudget < minBudget || taskBudget > maxBudget
        ?
        <ErrorHint>
          {errorHint}
        </ErrorHint>
        :
        null
      }
    </div>
  )
}

export default BudgetInput;


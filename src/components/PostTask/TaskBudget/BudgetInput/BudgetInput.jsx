import React from 'react';

import styles from '../../PostTask.module.scss';

import ErrorHint from '../../../ErrorHint';

function BudgetInput({
  taskBudget,
  minBudget,
  maxBudget,
  onBudgetHour,
  onBudgetHourlyWage,
  switchMode,
}) {

  const validateInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
  }

  const errorHint = "Please suggest a budget between $" + minBudget + " and $" + maxBudget + " for your task";

  return (
    <div className={styles.budget_input_box}>
    <div className={styles.budget_input}>
      <input 
        className={styles.Money}
        type="text"
        onChange={onBudgetHourlyWage}
        onInput={validateInput}
      />
      {switchMode
        ?
        <React.Fragment>
          <div className={styles.Radio}>/hr &times;</div>
          <input
            className={styles.Hour}
            type="text"
            onChange={onBudgetHour}
            onInput={validateInput}
          />
          <div className={styles.Radio}>/hrs</div>
        </React.Fragment>
        :
      null
    }
     </div>
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


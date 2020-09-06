import React from 'react'

import styles from '../../PostTask.module.scss'

function BudgetDisplay({
  taskBudget,
}) {
  return (
    <div className={styles.Budget}>
      <div className={styles.Label}>
        <div> ESTIMATED BUDGET </div>
          <div> Final payment will be agree later </div>
        </div>
      <div> ${taskBudget} </div>
    </div>
  )
}

export default BudgetDisplay;

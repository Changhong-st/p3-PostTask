import React from 'react';

import styles from '../../PostTask.module.scss';

function ErrorHint({
  onBudgetChange,
}) {
  return (
    <input 
      className={styles.Money}
      type = "number" 
      onChange={onBudgetChange}
    />
  )
}

export default ErrorHint;


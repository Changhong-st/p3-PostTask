import React from 'react';

import styles from '../PostTask/PostTask.module.scss';

function ErrorHint(props) {
  return (
    <div>
      <label className={styles.ErrorHint}> 
        {props.children}
      </label>
    </div>
  )
}

export default ErrorHint;


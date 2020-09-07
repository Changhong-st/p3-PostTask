import React from 'react';

import styles from '../PostTask/PostTask.module.scss';

function TaskRadio({
  radioType,
  radioHint,
  isChecked,
  handleClick,
}) {
  return (
    <React.Fragment>
      <div className={styles.TaskRadio}>
        <input 
          className={styles.Radio}
          name="TaskRadio"
          type="radio" 
          defaultChecked={isChecked}
          onClick={handleClick}
        />
        <p className={styles.RadioTitle}> {radioType} </p>
      </div>
        <b>
          {radioHint}
        </b>
    </React.Fragment>
  )
}

export default TaskRadio;


import React from 'react';

import styles from '../PostTask.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

import PostTaskTop from '../../PostTaskTop';
import TaskRadio from '../../TaskRadio';
import Button from '../../Button';
import TaskDatePicker from './TaskDatePicker';
import ErrorHint from '../../ErrorHint';

class TaskLocationAndTime extends React.Component {
  constructor(props){
    super(props);

    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(event) {
    this.props.handleDateValue(event);
  }

render(){
  return (
    <React.Fragment>
      <PostTaskTop> Say where & when </PostTaskTop>
      <div className={styles.Main}>
        <h2 className={styles.OtherHeading}> 
          Where do you need it done? 
        </h2>
        <div className={styles.Box}>
        <div className={styles.Piece}>
          <TaskRadio
            radioType={"In Person"}
            radioHint={"Select this if you need the Tasker physically there."}
            isChecked={true} 
          />
        </div>
        <div className={styles.Piece}>
          <TaskRadio
            radioType={"Online"}
            radioHint={"Select this if the Tasker can do it from home."}
            isChecked={false}
          />
        </div>
        </div>
        <h2 className={styles.OtherHeading}> 
          When do you need it done? 
        </h2>
        <div className={styles.DateBox}>
          <TaskDatePicker 
            startDate={this.props.startDate}
            onDateChange={this.onDateChange}
          />
        </div>
        { this.props.startDate == null ?
          <ErrorHint>
            Please select the date you would like the task to be done 
          </ErrorHint>
          :
          null
        }
        </div>
        <div className={styles.Bottom}>
          <Button handleBackClick={this.props.handleBackClick} >
            Back
          </Button>
          <Button handleNextClick={this.props.handleNextClick}> 
            Next
          </Button>
        </div>
    </React.Fragment>
  )
  }
}

export default TaskLocationAndTime;


import React from 'react';

import styles from '../PostTask.module.scss';

import PostTaskTop from '../../PostTaskTop';
import TaskRadio from '../../TaskRadio';
import BudgetInput from './BudgetInput';
import Button from '../../Button';
import BudgetHelp from './BudgetHelp';
import BudgetDisplay from './BudgetDisplay';

class TaskBudget extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isHourlyRate: false,
    };

    this.onBudgetHour = this.onBudgetHour.bind(this);
    this.onBudgetHourlyWage = this.onBudgetHourlyWage.bind(this);
    this.onBudgetHourlyWage = this.onBudgetHourlyWage.bind(this);
    this.handleHourlyRateClick = this.handleHourlyRateClick.bind(this);
    this.handleTotalClick = this.handleTotalClick.bind(this);
  }

  // onTaskBudget(e) {
  //   this.props.onTaskBudget(e.target.value);
  // }
  
  handleHourlyRateClick(e) {
    this.setState({ isHourlyRate: true });
  }

  handleTotalClick(e) {
    this.setState({ isHourlyRate: false });
  }

  onBudgetHour(e) {
    this.props.onBudgetHour(e.target.value);
  }

  onBudgetHourlyWage(e) {
    this.props.onBudgetHourlyWage(e.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <PostTaskTop> Suggest how much </PostTaskTop>
        <div className={styles.Main}>
          <div className={styles.TitleBox}>
            <h2 className={styles.OtherHeading}> What is your budget? </h2>
            <div className={styles.WantHelpBox}>
              <div className={styles.WantHelp}>
              Want help? 
              <BudgetHelp />
              </div> 
            </div>
          </div>
          <label className={styles.HintLabel}> 
            Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer. 
          </label>
          <div className={styles.TaskRadioBox}>
            <div className={styles.BudgetRadio}>
              <TaskRadio
              radioType={"Total"}
              isChecked={true} 
              handleClick={this.handleTotalClick}
              />
            </div>
            <div className={styles.BudgetRadio}>
              <TaskRadio
              radioType={"Hourly Rate"}
              isChecked={false}
              handleClick={this.handleHourlyRateClick}
              />
            </div>
          </div>
          <BudgetInput
            name={"wage"}
            type={"hour"}
            switchMode={this.state.isHourlyRate}
            taskBudget={this.props.taskBudget}
            minBudget={5}
            maxBudget={9999}
            onBudgetHour={this.onBudgetHour}
            onBudgetHourlyWage={this.onBudgetHourlyWage} 
          />
          
          <div>
            <BudgetDisplay 
              taskBudget={this.props.taskBudget}
            />
          </div>
        </div>
        <div className={styles.Bottom} >
          <Button handleBackClick = {this.props.handleBackClick}>
            Back
          </Button>
          <Button> 
            Get quotes
          </Button>
        </div>
    </React.Fragment>
    )
  }
}

export default TaskBudget;


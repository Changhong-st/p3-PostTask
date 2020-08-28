import React from 'react';
import styles from '../Screen.module.scss';
import Header from '../../Header';
import Button from '../../Button';

class SecondScreen extends React.Component {
  constructor(props){
    super(props);
    

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDetailsChange = this.onDetailsChange.bind(this);
    //this.handleJobTitle = this.judgeTitle.bind(this);
  }
  onTitleChange (e) { 
    this.props.onJobTitle (e.target.value);
  }

  // handleJobTitle (e) {
  //   this.props.handleJobTitle(e);
  // }

  onDetailsChange (e) { 
    this.props.onJobDetails (e.target.value);
  }
  
  render() {
    
    return (
      <React.Fragment>
        <Header> Tell us what you need done? </Header>
        <div className={styles.Main}>
          <h2 className={styles.OtherHeading}> 
            What do you need done? 
          </h2>
            <label className={styles.HintLabel}> 
              This'll be the title of your task - e.g. Help move my sofa 
            </label>
              <input 
                className = {styles.JobTitle}
                minLength = '10'
                maxLength = '50'
                onChange = { this.onTitleChange }  
              />
              { !this.props.isTitleCorrect
                ? 
                <div>
                <label className={styles.ErrorHint}> 
                  Please enter at least 10 characters and a maximum of 50 
                </label>
                </div>
                : 
                null}

          <h2 className={styles.OtherHeading}> 
            What are the details? 
          </h2>
            <label className={styles.HintLabel}> 
              Be as specific as you can about what needs doing 
            </label>
              <textarea 
                className = {styles.JobDetails}
                minLength = '25'
                maxLength = '1000' 
                onChange = {this.onDetailsChange}
              />
              { !this.props.isDetailsCorrect 
                ? 
                <label className={styles.ErrorHint} > 
                  Please enter at least 25 characters and a maximum of 1000 
                </label>
                :
                null
              }
          </div>
          <div className={styles.Bottom}>
            <Button handleBackClick={this.props.handleBackClick}>
              Back
            </Button>
            <Button 
              handleNextClick={
                this.props.handleNextClick
              }
              // handleJobTitle={this.props.handleJobTitle}
              // handleJodDetails={this.props.handleJodDetails}
            > 
              Next 
            </Button>
            
          </div>
      </React.Fragment>
    )
  }
}
export default SecondScreen;


import React from 'react';
import styles from './Body.module.scss';
import FirstScreen from './FirstScreen/FirstScreen';
import SecondScreen from './SecondScreen/SecondScreen';
import ThirdScreen from './ThirdScreen/ThirdScreen';
import ForthScreen from './ForthScreen/ForthScreen';
import Button from '../Button';



class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 0,
      jobTitle: '',
      jobDetails: '',
      
    }

    this.handleScreenSwitch = this.handleScreenSwitch.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleJobTitle = this.handleJobTitle.bind(this);
    this.handleJobDetails = this.handleJobDetails.bind(this);

  }

  handleJobTitle (value) {
    this.setState(() => ({ jobTitle: value }));
  }

  handleJobDetails (value) {
    this.setState(() => ({ jobDetails: value }));
  }

  handleNextClick () {
    this.setState(() => ({
      currentScreenIndex: this.state.currentScreenIndex + 1,
    }))
  }

  handleBackClick () {
    this.setState((prevState) => ({
      currentScreenIndex: prevState.currentScreenIndex - 1,
    }))
  }

  handleScreenSwitch (screenIndex) {
    switch (screenIndex) {
      default: return(
        <div>
          default
        </div>
      );
      case (0): 
        return (<div className = { styles.Main }> <FirstScreen /> </div>);
        
      case (1):
        return (
          <div className = { styles.Main }> 
            <SecondScreen
              handleJobTitle = { this.handleJobTitle }
              handleJobDetails = { this.handleJobDetails }
            /> 
          </div>
          );

      case (2):
        return (<div className = { styles.Main }> <ThirdScreen /> </div>);

      case (3):
        return (<div className = { styles.Main }> <ForthScreen /> </div>);
        
    }
  }

  

  render() {
    const { currentScreenIndex } = this.state;
    return (
      <React.Fragment>
      {
        this.handleScreenSwitch(currentScreenIndex)
      }
      <div className = { styles.Bottom } >
        {
          currentScreenIndex === 0
            ?
          <div className = { styles.Bottom } >
            <Button 
              handleNextClick = { this.handleNextClick } 
            > 
              Next 
            </Button>
          </div>
          :
          currentScreenIndex < 3
            ?
          <div className = { styles.Bottom } >
            <Button
            handleBackClick = { this.handleBackClick }
            >
              Back
            </Button>
            <Button 
              handleNextClick = { this.handleNextClick } 
            > 
              Next 
            </Button>
          </div>
            :
            <div className = { styles.Bottom } >
            <Button
            handleBackClick = { this.handleBackClick }
            >
              Back
            </Button>
            <Button 
              handleNextClick = { this.handleNextClick } 
            > 
              Get quotes 
            </Button>
          </div>
        }
        </div>
      </React.Fragment>
    )
  }
}

export default Body;
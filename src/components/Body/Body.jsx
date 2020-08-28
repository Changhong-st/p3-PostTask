import React from 'react';

import FirstScreen from './FirstScreen/FirstScreen';
import SecondScreen from './SecondScreen/SecondScreen';
import ThirdScreen from './ThirdScreen/ThirdScreen';
import ForthScreen from './ForthScreen/ForthScreen';




class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 1,
      jobTitle: "",
      jobDetails: "",
      // jobTitleLength: , // >10
      // jobDetailsLength: , // >25
      
      isTitleCorrect: false,
  
      isDetailsCorrect: false,
    }

    this.handleScreenSwitch = this.handleScreenSwitch.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onJobTitle = this.onJobTitle.bind(this);
    this.onJobDetails = this.onJobDetails.bind(this);
    this.handleJobTitle = this.handleJobTitle.bind(this);
    this.handleJobDetails = this.handleJobDetails.bind(this);
    this.handleSecondScreenNextClick = this.handleSecondScreenNextClick.bind(this);

  }

  onJobTitle (value) {
    this.setState(
      { jobTitle: value },
      this.handleJobTitle
      );
  }

  onJobDetails (value) {
    this.setState(
      { jobDetails: value },
      this.handleJobDetails
      );
  }

  handleJobTitle () {
    //event.preventDefault();
    if (this.state.jobTitle.length > 10){
      this.setState({
        isTitleCorrect: true,
      })
    }else {
      this.setState({
        isTitleCorrect: false,
      });
    }
  }


  handleJobDetails () {
    // event.preventDefault();
    if (this.state.jobDetails.length > 25 ){
      this.setState({
        isDetailsCorrect: true,
      })
    }else {
      this.setState({
        isDetailsCorrect: false,
      });
    }
  }

  handleNextClick () {
    this.setState(() => ({
      currentScreenIndex: this.state.currentScreenIndex + 1,
    }))
  }
  

 handleSecondScreenNextClick ()
    {
     this.handleJobTitle();
     this.handleJobDetails();
     if (this.state.isTitleCorrect && this.state.isDetailsCorrect ) {
       this.handleNextClick();
      }
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
        return (
          <FirstScreen handleNextClick={this.handleNextClick} />
        );
        
      case (1):
        return ( 
          <SecondScreen
              isTitleCorrect = {this.state.isTitleCorrect}
              isDetailsCorrect = {this.state.isDetailsCorrect}
              onJobTitle = { this.onJobTitle }
              onJobDetails = { this.onJobDetails }
              handleJobTitle = { this.handleJobTitle }
              handleJobDetails = { this.handleJobDetails }
              handleNextClick = { this.handleSecondScreenNextClick }
              handleBackClick = { this.handleBackClick }
          />
        );

      case (2):
        return ( 
          <ThirdScreen 
              handleNextClick = { this.handleNextClick }
              handleBackClick = { this.handleBackClick }
          />
        );

      case (3):
        return (
          <ForthScreen handleBackClick = { this.handleBackClick } /> 
        );
        
    }
  }

  

  render() {
    const { currentScreenIndex } = this.state;
    return (
      <React.Fragment>
      {
        this.handleScreenSwitch(currentScreenIndex)
      }
      </React.Fragment>
    )
  }
}

export default Body;
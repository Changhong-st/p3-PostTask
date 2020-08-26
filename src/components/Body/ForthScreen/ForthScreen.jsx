import React from 'react';
import styles from '../Screen.module.scss';
import Header from '../../Header';

function ForthScreen () {

  return (
    <React.Fragment>
      <Header> Suggest how much </Header>
      <div className = { styles.TitleBox }>
        <h2 className = { styles.OtherHeading }> What is your budget? </h2>
        <div> Want help? </div>
      </div>
      <label 
        className = { styles.HintLabel }
      > 
        Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer. 
      </label>
      <div className = { styles.Box }>
        <div className = { styles.Bit }>
          <div className = { styles.Selected }>
            <input 
              className = { styles.Radio }
              type = "radio" />
            <p className = { styles.RadioTitle }> Total </p>
          </div>
        </div>
        <div className = { styles.Bit }>
          <div className = { styles.Selected }>
            <input
              className = { styles.Radio }
              type = "radio" 
            />
            <p className = { styles.RadioTitle }> Hourly Rate </p>
          </div>
        </div>
      </div>
      <input 
        className = { styles.Money }
        type = "number" 
      />
      <div>
        <div className = { styles.Budget }>
          <div className = { styles.Label }>
            <div> ESTIMATED BUDGET </div>
            <div> Final payment will be agree later </div>
          </div>
          <div> $0 </div>
        </div>
      </div>
  </React.Fragment>

  )
}

export default ForthScreen;


import React from 'react';

import styles from '../Screen.module.scss';

import png from './test.png';

import Header from '../../Header';
import Button from '../../Button';

function FirstScreen ({
  handleNextClick,
}) {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.Main}>
        <img 
          className = { styles.Img }
          src = {png}
          alt = ''
        />
        <h2 className={styles.IndividualHeading}> 
          Start getting offers in no time 
        </h2>
        <p className={styles.InitialMsg}> 
          We're just going to ask a few questions to help you find the right Tasker - it'll only take a few minutes! 
        </p>
      </div>
      <div className={styles.Bottom}>
        <Button
          handleNextClick={handleNextClick}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  )
}

export default FirstScreen;


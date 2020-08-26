import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from '../Screen.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../../Header';

function ThirdScreen () {

  const [startDate, setStartData] = useState(new Date());

  return (
    <React.Fragment>
      <Header> Say where & when </Header>
      <h2 
        className = { styles.OtherHeading }
      > Where do you need it done? 
      </h2>
      <div className = { styles.Box }>
        <div className = { styles.Piece }>
          <div className = { styles.Selected }>
            <input 
              className = { styles.Radio }
              type = "radio" 
            />
            <p className = { styles.RadioTitle }> In Person </p>
          </div>
          <b>
            Select this if you need the Tasker physically there.
          </b>
          </div>
        <div className = { styles.Piece }>
          <div className = { styles.Selected }>
          <input 
            className = { styles.Radio }
            type = "radio" 
          />
            <p className = { styles.RadioTitle }> Online </p>
          </div>
          <b>
            Select this if the Tasker can do it from home.
          </b>
        </div>
      </div>
      <h2
        className = { styles.OtherHeading }
      > When do you need it done? 
      </h2>
      <div className = { styles.DateBox }>
        <DatePicker selected={ startDate } onChange = { date => setStartData(date)} />
      </div>
    </React.Fragment>
  )
}

export default ThirdScreen;


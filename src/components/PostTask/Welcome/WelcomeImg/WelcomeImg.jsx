import React from 'react';

import styles from '../../PostTask.module.scss';

import png from './welcome.png';

function WelcomeImg() {
  return (
    <img
      className={styles.Img}
      src={png}
      alt="Welcome"
    />
  )
}

export default WelcomeImg;


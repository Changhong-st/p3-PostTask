import React from 'react';
import styles from './Header.module.scss';


function Header (props) {
  return (
    <div className = { styles.Main }>
      <label className = { styles.Close }> &times; </label> 
      <p className = { styles.Bar }> { props.children } </p>
    </div>
  )
}

export default Header;
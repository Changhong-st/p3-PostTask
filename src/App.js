import React from 'react';
import PostTask from './components/PostTask/PostTask';
import styles from  './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <PostTask />
    </div>

  );
}
export default App;

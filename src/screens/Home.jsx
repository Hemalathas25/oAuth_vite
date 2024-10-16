import React from 'react';

export const Home = () => {

  return (
    <header style={styles.header}>
      <h4>Welcome!</h4>
    </header>
  );
};

const styles = {
  header: {
   
    padding: '20px',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};


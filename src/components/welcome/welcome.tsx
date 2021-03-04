import * as React from 'react';
import styles from './welcome.module.css';

export type WelcomeProps = {
  poweredBy?: string
};

export const Welcome: React.FC<WelcomeProps> = ({ poweredBy = '@Snowpack' }) => (
  <div className={styles.container}>
    <p className={styles.welcome}>Welcome to React!</p>
    <p className={styles.poweredBy}>
      {'Powered by '}
      <span className={styles.tech}>{poweredBy}</span>
    </p>
  </div>
);

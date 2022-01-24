import React from 'react';
import styles from './Wrapper.module.scss';

type Wrapper = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Wrapper) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;

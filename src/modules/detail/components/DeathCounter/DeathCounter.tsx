import React from 'react';
import { ReactComponent as DeadIcon } from 'assets/images/dead.svg';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './DeathCounter.module.scss';

type DeathCounter = {
  deaths: number;
  className?: string;
};

const DeathCounter = ({ deaths, className }: DeathCounter) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.deathCounter, className)}>
      <DeadIcon className={styles.deathCounter__icon} />
      <p className={styles.deathCounter__text}>{`${deaths} ${t('deaths')}`}</p>
    </div>
  );
};

export default DeathCounter;

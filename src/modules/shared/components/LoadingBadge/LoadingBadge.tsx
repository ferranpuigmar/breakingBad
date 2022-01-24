import React from 'react';
import styles from './LoadingBadge.module.scss';
import { ReactComponent as Face } from 'assets/images/notFoundFace.svg';
import { useTranslation } from 'react-i18next';

const LoadingBadge = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.loadingBadge}>
      <p>{t('loading')}...</p>
      <Face />
    </div>
  );
};

export default LoadingBadge;

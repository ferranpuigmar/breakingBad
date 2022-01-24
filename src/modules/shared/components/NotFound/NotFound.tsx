import React from 'react';
import styles from './NotFound.module.scss';
import { ReactComponent as Face } from 'assets/images/notFoundFace.svg';
import { useTranslation } from 'react-i18next';
type NotFound = {
  message: string;
};
const NotFound = ({ message }: NotFound) => {
  const { t } = useTranslation();
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__message}>{t(message)}</div>
      <div className={styles.notFound__bg}>
        <Face />
      </div>
    </div>
  );
};

export default NotFound;

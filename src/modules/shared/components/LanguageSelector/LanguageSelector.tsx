import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSelector}>
      <ul>
        <li>
          <span
            className={currentLanguage === 'es' ? 'selected' : ''}
            onClick={() => changeLanguage('es')}>
            ES
          </span>
        </li>
        <li>
          <span
            className={currentLanguage === 'en' ? 'selected' : ''}
            onClick={() => changeLanguage('en')}>
            EN
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;

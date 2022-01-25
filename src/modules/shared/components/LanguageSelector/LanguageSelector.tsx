import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import styles from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    const url = location.pathname;
    const splitUrl = url.split('/');
    splitUrl[1] = lng;
    window.history.replaceState({}, '', splitUrl.join('/'));
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

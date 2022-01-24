import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Logo from 'modules/shared/components/Logo/Logo';
import styles from 'modules/shared/components/Header/Header.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <header className={styles.header}>
      <Container>
        <Row justify="center">
          <Col xs={6}>
            <Link to={`/${i18n.language}`}>
              <Logo />
            </Link>
          </Col>
          <Col xs={6}>
            <LanguageSelector />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

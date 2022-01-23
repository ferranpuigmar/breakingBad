import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Logo from 'modules/shared/components/Logo/Logo';
import styles from 'modules/shared/components/Header/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row justify="center">
          <Col>
            <Logo />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

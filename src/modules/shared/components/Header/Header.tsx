import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Logo from 'modules/shared/components/Logo/Logo';
import styles from 'modules/shared/components/Header/Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row justify="center">
          <Col>
            <Link to="/">
              <Logo />
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styles from './Wrapper.module.scss';

type Wrapper = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Wrapper) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.wrapper}>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;

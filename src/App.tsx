import Header from 'modules/shared/components/Header/Header';
import Main from 'modules/shared/components/Main/Main';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default App;

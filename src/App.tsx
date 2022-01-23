import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useDispatch } from 'react-redux';
import { getCharacters } from 'store/features/charactersSlice';

const App = () => {
  const dispatch = useDispatch();
  const loadList = async () => {
    const resultAction = await dispatch(getCharacters(10));
    console.log('resultAction: ', resultAction);
  };

  useEffect(() => {
    loadList();
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={4}>One of three columns</Col>
        <Col sm={4}>One of three columns</Col>
        <Col sm={4}>One of three columns</Col>
      </Row>
    </Container>
  );
};

export default App;

import Header from 'modules/shared/components/Header/Header';
import React, { useEffect } from 'react';
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

  return <Header />;
};

export default App;

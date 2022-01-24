import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

type BasicLayout = {
  children: React.ReactNode;
};

const BasicLayout = ({ children }: BasicLayout) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default BasicLayout;

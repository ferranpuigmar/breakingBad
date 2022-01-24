import BasicLayout from 'modules/shared/components/Layout/BasicLayout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BasicLayout>
        <Outlet />
      </BasicLayout>
    </>
  );
};

export default App;

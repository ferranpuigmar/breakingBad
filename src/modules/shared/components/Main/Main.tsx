import React from 'react';

type Main = {
  children: React.ReactNode;
};

const Main = ({ children }: Main) => {
  return <main>{children}</main>;
};

export default Main;

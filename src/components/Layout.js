import React from 'react';
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container my-4">
      {children}
    </div>
  </>
);

export default Layout

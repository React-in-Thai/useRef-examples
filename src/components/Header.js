import React from 'react';
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

const Header = () => (
  <div className="shadow-sm p-4">
    <Link to={'/'} className="mr-4">
      Back to Home
    </Link>
    <Navigation />
  </div>
);

export default Header

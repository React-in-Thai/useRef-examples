import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <Link className="btn btn-primary" to="/usestate-vs-useref">useState vs useRef</Link>
    <Link className="btn btn-primary ml-2" to="/dom">DOM</Link>
    <Link className="btn btn-primary ml-2" to="/previous-state">Previous State</Link>
    <Link className="btn btn-primary ml-2" to="/set-interval">SetInterval</Link>
    <Link className="btn btn-primary ml-2" to="/event-listener">Event listener</Link>
  </>
);

export default Navigation

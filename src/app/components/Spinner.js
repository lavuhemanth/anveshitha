import React from 'react';
import { Spinner as ReactSpinner } from 'react-bootstrap';

const Spinner = () => (
  <div className="spinner-container">
    <p>Loading..</p>
    <ReactSpinner animation="border" variant="primary" />
  </div>
);

export default Spinner;

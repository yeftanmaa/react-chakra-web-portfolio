import React from 'react';

const OverlayText = ({ show, text }) => (
  <div className={show ? 'overlay-text show' : 'overlay-text'}>
    <p>{text}</p>
  </div>
);

export default OverlayText;

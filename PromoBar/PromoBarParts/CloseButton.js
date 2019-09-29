import React from 'react'

const CloseButton = props => (
    <button className="closeBtn" aria-label="Close" onClick={props.close}>
      <div className="ecks x1" />
      <div className="ecks x2" />
    </button>
  );

  export default CloseButton
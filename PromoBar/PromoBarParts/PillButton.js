import React from 'react'

const PillButton = props => (
    <div className="pillWrap col-sm-auto">
      <button className="pill">{props.cta}</button>
    </div>
  );

export default PillButton
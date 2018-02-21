import React from 'react';

const Checkbox = ({text, checked, onChange}) => (
  <div>
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}/> 
    <label>{text}</label>
  </div>
);

export default Checkbox;
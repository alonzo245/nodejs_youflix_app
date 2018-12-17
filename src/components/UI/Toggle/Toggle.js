import React from 'react';
import './Toggle.scss';

const Toggle = (props) => {

  return (
    // <div className="ToggleCheckbox" onChange={props.toggleTheme}>
    //   <label className="switch">
    //     <input type="checkbox" />
    //     <span className="slider round"></span>
    //   </label>
    // </div>

    <div className="ToggleCheckbox" onChange={props.toggleTheme}>
      <div class="can-toggle demo-rebrand-2">
        <input id="e" type="checkbox" />
        <label for="e">
          <div class="can-toggle__label-text">Dark Theme </div>
          <div class="can-toggle__switch" data-checked="On" data-unchecked="Off"></div>
        </label>
      </div>
    </div>
  )
};

export default Toggle;
import React from 'react';
import './Toggle.scss';

const Toggle = (props) => {

  return (
    <div className="ToggleCheckbox" onChange={props.toggleTheme}>
      <div class="can-toggle demo-rebrand-2">
        <input id="e" type="checkbox" />
        <label for="e">
          <div class="can-toggle__label-text">Switch Theme </div>
          <div class="can-toggle__switch" data-checked="Off" data-unchecked="On"></div>
        </label>
      </div>
    </div>
  )
};

export default Toggle;
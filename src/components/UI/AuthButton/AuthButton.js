import React from 'react';

import './AuthButton.scss';

const AuthButton = (props) => (
    <React.Fragment>
        <button
            onClick={props.clicked}
            className="AuthButton"
        >
            Login
        </button>
    </React.Fragment>
);

export default AuthButton;
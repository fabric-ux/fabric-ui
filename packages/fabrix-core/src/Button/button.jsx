import * as React from 'react';
import './button.css';

export default ({ children, ...props }) => {
    return <button className={`btn btn-${props.type || 'primary'}`}>{children}</button>
}
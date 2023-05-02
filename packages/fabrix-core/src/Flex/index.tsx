import * as React from 'react';
import './flex.css';

export default (props: never) => {
    return (
        <div className={`flex ${props.direction} gap-${props.gap}`} {...props}>{props.children}</div>
    );
}
import * as React from 'react';
import './flex.css';

type Direction = 'column' | 'row';
type Gap = 'simple' | 'compact' | 'cozy' | 'common';
export interface FProps {
    direction: Direction;
    gap: Gap;
    children: React.ReactNode;
}

export default (props: FProps) => {
    return (
        <div className={`flex ${props.direction} gap-${props.gap}`} {...props}>{props.children}</div>
    );
}
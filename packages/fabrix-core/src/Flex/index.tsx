import * as React from 'react';
import './flex.css';

type Direction = 'column' | 'row';
type Gap = 'simple' | 'compact' | 'cozy' | 'common';
export interface FProps {
    direction: Direction;
    gap: Gap;
    children: React.ReactNode;
    css: React.CSSProperties;
    center: boolean;
}

const Flex = (props: FProps) => {
    return (
        <div className={`flex ${props.direction} gap-${props.gap}${props.center ? ' center' : ''}`} style={props.css}>{props.children}</div>
    );
}

Flex.displayName = 'Flex';

export default Flex;
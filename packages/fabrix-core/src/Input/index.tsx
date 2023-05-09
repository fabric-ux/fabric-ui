//@ts-nocheck
import * as React from 'react';
import './input.css';
import type { Size } from '../Button'

export interface InputProps {
    children: React.ReactNode;
    type: 'text' | 'number';
    size: Size;
    placeholder: string;
}

const Input = (props: InputProps) => {
    return (
        <input {...props} placeholder={props.placeholder} className={`input${props.size ? ` size-${props.size}` : ''}`} type={props.type}>{props.children}</input>
    )
}

export default Input;

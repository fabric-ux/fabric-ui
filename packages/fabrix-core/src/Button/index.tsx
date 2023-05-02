import * as React from "react";
import ButtonPrimitive from './button';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps & HTMLElement) {
  return <ButtonPrimitive {...props}>{props.children}</ButtonPrimitive>;
}

Button.displayName = "Button";

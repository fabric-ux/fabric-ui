import * as React from "react";
import './button.css';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps {
  children: React.ReactNode;
  /**
   * Specify button type
   */
  type: 'primary' | 'secondary' | 'ghost' | 'error' | 'negative';
  size: Size
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ type, size, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`btn btn-${type || 'primary'} size-${size || 'auto'}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button";

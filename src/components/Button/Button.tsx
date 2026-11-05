import { forwardRef, type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'outline';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visuelle Variante. Standard: primary */
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', type = 'button', className, ...rest }, ref) => {
    const classes = [styles.button, styles[variant], className]
      .filter(Boolean)
      .join(' ');

    return <button ref={ref} type={type} className={classes} {...rest} />;
  },
);

Button.displayName = 'Button';
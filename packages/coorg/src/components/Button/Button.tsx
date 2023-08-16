import {
  Button as RDSButton,
  ButtonProps as RDSButtonProps,
} from '@reactds/core';
import { forwardRef } from 'react';
import { buttonVariations } from './Button.classes';
import { clsx } from 'clsx';

export type ButtonProps = RDSButtonProps & {
  full?: boolean;
  pill?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ full = false, pill = false, className = '', children, ...props }, ref) => {
    return (
      <RDSButton
        ref={ref}
        variations={buttonVariations}
        className={clsx(className, {
          'w-full': full,
          'rounded-full': pill,
        })}
        {...props}
      >
        {children}
      </RDSButton>
    );
  },
);

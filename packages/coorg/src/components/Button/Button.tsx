import {
  Button as RDSButton,
  ButtonProps as RDSButtonProps,
  cn,
} from '@reactds/core';
import { forwardRef } from 'react';
import { buttonVariations } from './Button.classes';

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
        className={cn(
          {
            'w-full': full,
            '!rounded-full': pill,
          },
          className,
        )}
        {...props}
      >
        {children}
      </RDSButton>
    );
  },
);

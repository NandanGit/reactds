import {
  Badge as RDSBadge,
  BadgeProps as RDSBadgeProps,
  cn,
} from '@reactds/core';
import { forwardRef } from 'react';
import { badgeVariations } from './Badge.classes';

export type BadgeProps = RDSBadgeProps & {
  pill?: boolean;
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      pill = false,
      className,
      removeIconContainerClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <RDSBadge
        ref={ref}
        variations={badgeVariations}
        className={cn(
          {
            '!rounded-full': pill,
          },
          className,
        )}
        removeIconContainerClassName={cn(
          'flex justify-center items-center p-0.5 bg-transparent hover:cursor-pointer glass glass-none hover:brightness-125 active:brightness-110',
          {
            '!rounded-full': pill,
          },
          removeIconContainerClassName,
        )}
        {...props}
      >
        {children}
      </RDSBadge>
    );
  },
);

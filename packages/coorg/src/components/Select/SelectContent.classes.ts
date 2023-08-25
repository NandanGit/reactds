import { SelectContentVariations, cn } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectContentVariations = cva<SelectContentVariations>(
  // relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
  cn(
    `${NS}-select--content`,
    'glass',
    'relative z-50 overflow-hidden shadow-xl',
    // 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', // Animation effects
  ),
  {
    variants: {
      intent: {
        default: `${NS}-default `,
        primary: `${NS}-primary bg-primary-800/40`,
        secondary: `${NS}-secondary bg-secondary-800/40 `,
        info: `${NS}-info bg-info-800/40 `,
        warning: `${NS}-warning bg-warning-800/40 `,
        success: `${NS}-success bg-success-800/40 `,
        danger: `${NS}-danger bg-danger-800/40 `,
      },
    },
  },
);

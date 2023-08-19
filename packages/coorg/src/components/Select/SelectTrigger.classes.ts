import { SelectTriggerVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectTriggerVariations = cva<SelectTriggerVariations>(
  // flex h-9  items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50
  `${NS}-select--trigger glass flex h-9 items-center justify-between px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      intent: {
        default: `${NS}-default `,
        primary: `${NS}-primary `,
        secondary: `${NS}-secondary `,
        info: `${NS}-info `,
        warning: `${NS}-warning `,
        success: `${NS}-success `,
        danger: `${NS}-danger `,
      },
      variant: {
        filled: `${NS}-filled `,
        ghost: `${NS}-ghost `,
      },
    },
  },
);

import { SelectTriggerVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectTriggerVariations = cva<SelectTriggerVariations>(
  //  flex h-9  items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50
  `${NS}-select--trigger glass flex h-9 items-center justify-between px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer border-opacity-60 focus-visible:glass-outline`,
  {
    variants: {
      intent: {
        default: `${NS}-default border-glass`,
        primary: `${NS}-primary bg-primary-800/40 text-primary-500/50 border-primary-800 `,
        secondary: `${NS}-secondary bg-secondary-800/40 text-secondary-500/50 border-secondary-800 `,
        info: `${NS}-info bg-info-800/40 text-info-500/50 border-info-800 `,
        warning: `${NS}-warning bg-warning-800/40 text-warning-500/50 border-warning-800 `,
        success: `${NS}-success bg-success-800/40 text-success-500/50 border-success-800 `,
        danger: `${NS}-danger bg-danger-900/40 text-danger-500/50 border-danger-800 `,
      },
      variant: {
        filled: `${NS}-filled !text-white/70 hover:brightness-125 active:brightness-110`,
        outline: `${NS}-outline border-solid border-2 hover:border-opacity-100`,
        ghost: `${NS}-ghost shadow-none hover:brightness-110 active:brightness-105 border-transparent`,
      },
    },
    defaultVariants: {
      variant: 'filled',
      intent: 'default',
    },
  },
);

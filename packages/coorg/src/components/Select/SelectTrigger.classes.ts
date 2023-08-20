import { SelectTriggerVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const selectTriggerVariations = cva<SelectTriggerVariations>(
  //  flex h-9  items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50
  `${NS}-select--trigger glass flex h-9 items-center justify-between px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 hover:cursor-pointer`,
  {
    variants: {
      intent: {
        default: `${NS}-default`,
        primary: `${NS}-primary bg-primary-800/40 text-primary-500/50 shadow-primary-800/80 border-primary-800`,
        secondary: `${NS}-secondary bg-secondary-800/40 text-secondary-500/50 shadow-secondary-800/80 border-secondary-800`,
        info: `${NS}-info bg-info-800/40 text-info-500/50 shadow-info-800/80 border-info-800`,
        warning: `${NS}-warning bg-warning-800/40 text-warning-500/50 shadow-warning-800/80 border-warning-800`,
        success: `${NS}-success bg-success-800/40 text-success-500/50 shadow-success-800/80 border-success-800`,
        danger: `${NS}-danger bg-danger-900/40 text-danger-500/50 shadow-danger-800/80 border-danger-800`,
      },
      variant: {
        filled: `${NS}-filled !text-white/70 hover:brightness-125 active:brightness-110`,
        outline: `${NS}-outline border-solid border-glass/50 border-2 hover:brightness-125 active:brightness-110`,
        ghost: `${NS}-ghost shadow-none hover:brightness-125 active:brightness-110 border-transparent`,
      },
    },
    defaultVariants: {
      variant: 'filled',
      intent: 'default',
    },
  },
);

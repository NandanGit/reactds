import { BadgeVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';
import { NS } from '../../constants';

export const badgeVariations = cva<BadgeVariations>(
  `${NS}-btn glass inline-flex items-center justify-center gap-1 text-base font-medium transition-all disabled:pointer-events-none disabled:opacity-50 text-white/70`,
  {
    variants: {
      variant: {
        filled: `${NS}-filled !text-white/80`,
        outline: `${NS}-outline border-solid  border-2 backdrop-blur-0`,
        soft: `${NS}-soft`,
        // ghost: `${NS}-ghost backdrop-blur-0 shadow-none hover:brightness-125 active:brightness-110 border-transparent`,
      },
      size: {
        sm: `${NS}-sm h-5 px-1 py-0 text-xs`,
        md: `${NS}-md h-7 px-2 py-1 text-sm`,
        lg: `${NS}-lg h-8 px-3 text-md`,
      },
      intent: {
        default: `${NS}-default border-glass/70`,
        primary: `${NS}-primary bg-primary-800/80 text-primary-500/50 shadow-primary-800/80 border-primary-800`,
        secondary: `${NS}-secondary bg-secondary-800/80 text-secondary-500/50 shadow-secondary-800/80 border-secondary-800`,
        info: `${NS}-info bg-info-800/80 text-info-500/50 shadow-info-800/80 border-info-800`,
        warning: `${NS}-warning bg-warning-800/80 text-warning-500/50 shadow-warning-800/80 border-warning-800`,
        success: `${NS}-success bg-success-800/80 text-success-500/50 shadow-success-800/80 border-success-800`,
        danger: `${NS}-danger bg-danger-900/90 text-danger-500/60 shadow-danger-800/80 border-danger-900/90`,
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      intent: 'default',
    },
  },
);
